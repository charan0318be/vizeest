'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface DemoModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const DemoModalContext = createContext<DemoModalContextType | undefined>(undefined);

export function DemoModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    // Clean up URL parameter after closing
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (url.searchParams.has('demo') || url.searchParams.has('schedule')) {
        url.searchParams.delete('demo');
        url.searchParams.delete('schedule');
        window.history.replaceState({}, '', url.pathname + url.hash);
      }
    }
  };

  // Auto-open modal when URL has campaign parameters
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      // Open modal if ?demo=true, ?demo, or ?schedule is present
      if (urlParams.has('demo') || urlParams.has('schedule')) {
        // Small delay to ensure page is loaded
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 500);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  return (
    <DemoModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </DemoModalContext.Provider>
  );
}

export function useDemoModal() {
  const context = useContext(DemoModalContext);
  if (context === undefined) {
    throw new Error('useDemoModal must be used within a DemoModalProvider');
  }
  return context;
}
