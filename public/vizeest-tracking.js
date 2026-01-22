/**
 * VizeEST Visitor Tracking Script v2.0
 * Enhanced with GeoIP, Screen Resolution, Language, Timezone
 * 
 * Add this to your public website:
 * <script>window.VIZEEST_API_URL = 'https://your-api.vizeest.com';</script>
 * <script src="vizeest-tracking.js"></script>
 */
(function() {
  'use strict';

  // Configuration
  var API_URL = window.VIZEEST_API_URL || 'https://api.vizeest.com';
  var VISITOR_KEY = 'vizeest_visitor_id';
  var visitorId = null;
  var startTime = Date.now();

  // Try to get stored visitor ID
  try {
    visitorId = localStorage.getItem(VISITOR_KEY);
  } catch (e) {
    // localStorage not available
  }

  /**
   * Get UTM parameters from URL
   */
  function getUtmParams() {
    try {
      var params = new URLSearchParams(window.location.search);
      return {
        utm_source: params.get('utm_source'),
        utm_medium: params.get('utm_medium'),
        utm_campaign: params.get('utm_campaign'),
        utm_term: params.get('utm_term'),
        utm_content: params.get('utm_content')
      };
    } catch (e) {
      return {};
    }
  }

  /**
   * Get device/browser info (NEW)
   */
  function getDeviceInfo() {
    try {
      return {
        screen_width: window.screen.width,
        screen_height: window.screen.height,
        language: navigator.language || navigator.userLanguage,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
      };
    } catch (e) {
      return {};
    }
  }

  /**
   * Send tracking data to API
   */
  function sendData(endpoint, data) {
    try {
      fetch(API_URL + endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      .then(function(res) { return res.json(); })
      .then(function(result) {
        if (result.success && result.visitor_id) {
          visitorId = result.visitor_id;
          try {
            localStorage.setItem(VISITOR_KEY, result.visitor_id);
          } catch (e) {}
        }
      })
      .catch(function(err) {
        console.log('VizeEST tracking error:', err);
      });
    } catch (e) {
      console.log('VizeEST tracking error:', e);
    }
  }

  /**
   * Track a page view (called automatically)
   */
  function trackPageView(additionalData) {
    var utm = getUtmParams();
    var deviceInfo = getDeviceInfo();
    var data = Object.assign({
      visitor_id: visitorId,
      page_url: window.location.href,
      referrer: document.referrer
    }, utm, deviceInfo, additionalData || {});

    sendData('/api/v1/visitors/track', data);
  }

  /**
   * Track form submission
   * @param {Object} formData - { source, name, email, fullName, phone, company, custom }
   */
  function trackForm(formData) {
    var deviceInfo = getDeviceInfo();
    return sendData('/api/v1/visitors/track', Object.assign({
      visitor_id: visitorId,
      page_url: window.location.href,
      form_source: formData.source || 'website',
      form_name: formData.name || 'Contact Form',
      email: formData.email,
      name: formData.fullName,
      phone: formData.phone,
      company: formData.company,
      custom_data: formData.custom || {}
    }, deviceInfo));
  }

  /**
   * Track conversion (signup, demo request, etc.)
   * @param {string} type - Conversion type (e.g., 'signup', 'demo_request')
   * @param {Object} data - { email, name, custom }
   */
  function trackConversion(type, data) {
    data = data || {};
    return sendData('/api/v1/visitors/convert', {
      visitor_id: visitorId,
      conversion_type: type || 'signup',
      email: data.email,
      name: data.name,
      custom_data: data.custom || {}
    });
  }

  /**
   * Track custom event
   * @param {string} eventName - Event name
   * @param {Object} eventData - Additional event data
   */
  function trackEvent(eventName, eventData) {
    var deviceInfo = getDeviceInfo();
    return sendData('/api/v1/visitors/track', Object.assign({
      visitor_id: visitorId,
      page_url: window.location.href,
      custom_data: Object.assign({ event_name: eventName }, eventData || {})
    }, deviceInfo));
  }

  /**
   * Get visitor ID (for forms that need it)
   */
  function getVisitorId() {
    return visitorId;
  }

  // ============== Auto-tracking ==============

  // Track page view on load
  trackPageView();

  // Track time on page when leaving
  window.addEventListener('beforeunload', function() {
    var timeOnPage = Math.round((Date.now() - startTime) / 1000);
    try {
      navigator.sendBeacon(
        API_URL + '/api/v1/visitors/track',
        JSON.stringify({
          visitor_id: visitorId,
          page_url: window.location.href,
          time_on_page: timeOnPage
        })
      );
    } catch (e) {
      // Fallback - may not complete before page unloads
      sendData('/api/v1/visitors/track', {
        visitor_id: visitorId,
        page_url: window.location.href,
        time_on_page: timeOnPage
      });
    }
  });

  // ============== Public API ==============
  window.vizeest = {
    trackForm: trackForm,
    trackConversion: trackConversion,
    trackEvent: trackEvent,
    getVisitorId: getVisitorId
  };

})();
