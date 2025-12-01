'use client';

import { useEffect, useRef, useState, useCallback, useMemo } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
}

// Main scroll animation hook with smooth reveal
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollAnimationOptions = {}
) {
  const {
    threshold = 0.15,
    rootMargin = '0px 0px -80px 0px',
    triggerOnce = true,
    delay = 0
  } = options;
  const elementRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0 && !prefersReducedMotion) {
            setTimeout(() => setIsVisible(true), delay);
          } else {
            setIsVisible(true);
          }
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce, delay]);

  return { ref: elementRef, isVisible };
}

// Hook for animating multiple elements with smooth stagger
export function useScrollAnimationGroup(
  itemCount: number,
  options: UseScrollAnimationOptions = {}
) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -60px 0px',
    triggerOnce = true
  } = options;
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  // Generate stagger classes with smooth cascade effect
  const getStaggerClass = useCallback(
    (index: number) => {
      const staggerIndex = Math.min(index + 1, 12); // Max 12 stagger levels
      return isVisible ? `animate-in stagger-${staggerIndex}` : '';
    },
    [isVisible]
  );

  // Get inline style for custom stagger delays
  const getStaggerStyle = useCallback(
    (index: number, baseDelay: number = 0.05) => {
      return isVisible ? { transitionDelay: `${baseDelay * index}s` } : {};
    },
    [isVisible]
  );

  return { ref: containerRef, isVisible, getStaggerClass, getStaggerStyle };
}

// Hook for parallax effects with smooth lerp
export function useParallax(speed: number = 0.5) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const targetOffset = useRef(0);
  const animationFrame = useRef<number | undefined>(undefined);

  useEffect(() => {
    // Check for reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    // Smooth lerp function for butter-smooth parallax
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const handleScroll = () => {
      if (!elementRef.current) return;

      const element = elementRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const elementCenter = rect.top + rect.height / 2;
      const windowCenter = windowHeight / 2;
      const distanceFromCenter = elementCenter - windowCenter;

      targetOffset.current = distanceFromCenter * speed * -1;
    };

    const animate = () => {
      setOffset(prev => {
        const newOffset = lerp(prev, targetOffset.current, 0.08);
        // Stop animating when close enough
        if (Math.abs(newOffset - targetOffset.current) < 0.1) {
          return targetOffset.current;
        }
        return newOffset;
      });
      animationFrame.current = requestAnimationFrame(animate);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    animate();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [speed]);

  return {
    ref: elementRef,
    offset,
    style: {
      transform: `translate3d(0, ${offset}px, 0)`,
      willChange: 'transform'
    }
  };
}

// Counter animation hook with smooth easing
export function useCountUp(
  end: number,
  duration: number = 2000,
  start: number = 0
) {
  const [count, setCount] = useState(start);
  const [isAnimating, setIsAnimating] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  const startAnimation = useCallback(() => {
    if (isAnimating) return;

    // Check for reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(end);
      return;
    }

    setIsAnimating(true);

    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth easeOutExpo for natural deceleration
      const easeProgress = 1 - Math.pow(2, -10 * progress);
      const currentCount = Math.floor(start + (end - start) * easeProgress);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
        setIsAnimating(false);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, start, isAnimating]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.unobserve(element);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [startAnimation]);

  return { ref: elementRef, count };
}

// Mouse move parallax effect with smooth lerp
export function useMouseParallax(intensity: number = 0.02) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const targetPosition = useRef({ x: 0, y: 0 });
  const elementRef = useRef<HTMLDivElement>(null);
  const animationFrame = useRef<number | undefined>(undefined);

  useEffect(() => {
    // Check for reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      targetPosition.current = {
        x: (e.clientX - centerX) * intensity,
        y: (e.clientY - centerY) * intensity
      };
    };

    const animate = () => {
      setPosition(prev => ({
        x: lerp(prev.x, targetPosition.current.x, 0.1),
        y: lerp(prev.y, targetPosition.current.y, 0.1)
      }));
      animationFrame.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [intensity]);

  return {
    ref: elementRef,
    style: {
      transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      willChange: 'transform'
    },
  };
}

// Smooth tilt effect hook with spring physics
export function useTilt(maxTilt: number = 8) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const targetTilt = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });
  const elementRef = useRef<HTMLDivElement>(null);
  const animationFrame = useRef<number | undefined>(undefined);
  const isHovering = useRef(false);

  // Spring physics constants
  const stiffness = 0.15;
  const damping = 0.75;

  useEffect(() => {
    // Check for reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const animate = () => {
      setTilt(prev => {
        // Spring physics calculation
        const dx = targetTilt.current.x - prev.x;
        const dy = targetTilt.current.y - prev.y;

        velocity.current.x += dx * stiffness;
        velocity.current.y += dy * stiffness;

        velocity.current.x *= damping;
        velocity.current.y *= damping;

        return {
          x: prev.x + velocity.current.x,
          y: prev.y + velocity.current.y
        };
      });
      animationFrame.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      targetTilt.current = {
        x: ((mouseY - centerY) / centerY) * maxTilt * -1,
        y: ((mouseX - centerX) / centerX) * maxTilt
      };
      isHovering.current = true;
    },
    [maxTilt]
  );

  const handleMouseLeave = useCallback(() => {
    targetTilt.current = { x: 0, y: 0 };
    isHovering.current = false;
  }, []);

  return {
    ref: elementRef,
    tilt,
    handlers: {
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
    },
    style: {
      transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      willChange: 'transform'
    },
  };
}

// Smooth reveal hook for text/content
export function useReveal(options: UseScrollAnimationOptions = {}) {
  const { threshold = 0.2, rootMargin = '0px', triggerOnce = true } = options;
  const elementRef = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsRevealed(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref: elementRef, isRevealed };
}

// Magnetic button effect hook
export function useMagnetic(strength: number = 0.3) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!elementRef.current) return;

    // Check for reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const rect = elementRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    setPosition({
      x: (e.clientX - centerX) * strength,
      y: (e.clientY - centerY) * strength
    });
  }, [strength]);

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  return {
    ref: elementRef,
    handlers: {
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
    },
    style: {
      transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      transition: 'transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)'
    }
  };
}
