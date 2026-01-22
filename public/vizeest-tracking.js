/**
 * VizeEST Visitor Tracking Script v1.0
 * 
 * Add this script to your PUBLIC WEBSITE to track visitors.
 * The data will appear in your Superadmin Dashboard.
 * 
 * Usage:
 *   <script src="https://your-domain.com/vizeest-tracking.js"></script>
 * 
 * Or with custom API URL:
 *   <script>window.VIZEEST_API_URL = 'https://api.vizeest.com';</script>
 *   <script src="https://your-domain.com/vizeest-tracking.js"></script>
 */

(function() {
  'use strict';

  // ============== Configuration ==============
  // Set your backend API URL here or define window.VIZEEST_API_URL before loading this script
  const API_URL = window.VIZEEST_API_URL || 'https://api.vizeest.com';
  const VISITOR_ENDPOINT = API_URL + '/api/v1/visitors';
  
  // Storage keys
  const VISITOR_ID_KEY = 'vizeest_visitor_id';
  const SESSION_KEY = 'vizeest_session_start';
  const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes

  // ============== State ==============
  let visitorId = null;
  let pageStartTime = Date.now();

  // ============== Utility Functions ==============
  
  function getFromStorage(key) {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  }

  function setToStorage(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      // Storage not available
    }
  }

  function getUtmParams() {
    try {
      const params = new URLSearchParams(window.location.search);
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

  function sendRequest(endpoint, data) {
    return fetch(VISITOR_ENDPOINT + endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(function(response) {
      return response.json();
    })
    .catch(function(error) {
      console.log('[VizeEST] Request failed:', error.message);
      return null;
    });
  }

  function sendBeaconRequest(endpoint, data) {
    try {
      const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
      navigator.sendBeacon(VISITOR_ENDPOINT + endpoint, blob);
    } catch (e) {
      // Beacon not supported, try fetch
      sendRequest(endpoint, data);
    }
  }

  // ============== Core Tracking Functions ==============

  /**
   * Track a page view
   */
  function trackPageView(additionalData) {
    const utm = getUtmParams();
    const data = Object.assign({
      visitor_id: visitorId,
      page_url: window.location.href,
      referrer: document.referrer
    }, utm, additionalData || {});

    return sendRequest('/track', data)
      .then(function(result) {
        if (result && result.success && result.visitor_id) {
          visitorId = result.visitor_id;
          setToStorage(VISITOR_ID_KEY, result.visitor_id);
          
          if (result.is_new) {
            console.log('[VizeEST] New visitor tracked:', result.visitor_id);
          }
        }
        return result;
      });
  }

  /**
   * Track time spent on page (called on page unload)
   */
  function trackTimeOnPage() {
    if (!visitorId) return;
    
    const timeOnPage = Math.round((Date.now() - pageStartTime) / 1000);
    if (timeOnPage > 0) {
      sendBeaconRequest('/track', {
        visitor_id: visitorId,
        page_url: window.location.href,
        time_on_page: timeOnPage
      });
    }
  }

  /**
   * Start a new session for returning visitor
   */
  function checkAndStartSession() {
    const lastSession = getFromStorage(SESSION_KEY);
    const now = Date.now();

    if (lastSession && visitorId) {
      const elapsed = now - parseInt(lastSession, 10);
      if (elapsed > SESSION_TIMEOUT) {
        // New session for returning visitor
        sendRequest('/session?visitor_id=' + visitorId, {});
      }
    }

    setToStorage(SESSION_KEY, now.toString());
  }

  /**
   * Track a form submission
   * @param {Object} formData - Form data to track
   */
  function trackForm(formData) {
    if (!formData) return Promise.resolve(null);

    return sendRequest('/track', {
      visitor_id: visitorId,
      page_url: window.location.href,
      form_source: formData.source || formData.form_source || 'website_form',
      form_name: formData.name || formData.form_name || 'Form',
      email: formData.email,
      name: formData.fullName || formData.full_name || formData.name,
      phone: formData.phone,
      company: formData.company,
      custom_data: formData.custom || formData.custom_data || {}
    })
    .then(function(result) {
      if (result && result.success) {
        console.log('[VizeEST] Form tracked:', formData.name || 'Form');
      }
      return result;
    });
  }

  /**
   * Track a conversion event
   * @param {string} type - Conversion type (signup, demo_request, purchase, etc.)
   * @param {Object} data - Additional data
   */
  function trackConversion(type, data) {
    if (!visitorId) {
      console.warn('[VizeEST] No visitor ID for conversion tracking');
      return Promise.resolve(null);
    }

    const conversionData = data || {};
    
    return sendRequest('/convert', {
      visitor_id: visitorId,
      conversion_type: type || 'conversion',
      email: conversionData.email,
      name: conversionData.name || conversionData.fullName,
      custom_data: conversionData.custom || conversionData.custom_data || {}
    })
    .then(function(result) {
      if (result && result.success) {
        console.log('[VizeEST] Conversion tracked:', type);
      }
      return result;
    });
  }

  /**
   * Track a custom event
   * @param {string} eventName - Event name
   * @param {Object} eventData - Event data
   */
  function trackEvent(eventName, eventData) {
    return sendRequest('/track', {
      visitor_id: visitorId,
      page_url: window.location.href,
      custom_data: Object.assign({
        event: eventName,
        timestamp: new Date().toISOString()
      }, eventData || {})
    });
  }

  /**
   * Get the current visitor ID
   */
  function getVisitorId() {
    return visitorId;
  }

  // ============== Initialize ==============

  function init() {
    // Load existing visitor ID
    visitorId = getFromStorage(VISITOR_ID_KEY);

    // Track initial page view
    trackPageView();

    // Check for new session
    checkAndStartSession();

    // Track time on page when leaving
    window.addEventListener('beforeunload', trackTimeOnPage);

    // Track when page becomes hidden (mobile)
    document.addEventListener('visibilitychange', function() {
      if (document.visibilityState === 'hidden') {
        trackTimeOnPage();
      } else {
        pageStartTime = Date.now();
      }
    });

    console.log('[VizeEST] Tracking initialized');
  }

  // ============== Expose Public API ==============

  window.vizeest = {
    trackPageView: trackPageView,
    trackForm: trackForm,
    trackConversion: trackConversion,
    trackEvent: trackEvent,
    getVisitorId: getVisitorId
  };

  // Legacy function names (for backward compatibility)
  window.vizeestTrackForm = trackForm;
  window.vizeestTrackConversion = trackConversion;
  window.vizeestTrackEvent = trackEvent;
  window.vizeestGetVisitorId = getVisitorId;

  // Auto-initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
