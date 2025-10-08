"use client";

import { useEffect, useState } from "react";

/**
 * Hook to manage cookie settings modal state
 * Uses custom events to communicate between components
 */
export function useCookieSettings() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    window.addEventListener("openCookieSettings", handleOpen);
    window.addEventListener("closeCookieSettings", handleClose);

    return () => {
      window.removeEventListener("openCookieSettings", handleOpen);
      window.removeEventListener("closeCookieSettings", handleClose);
    };
  }, []);

  const open = () => {
    window.dispatchEvent(new CustomEvent("openCookieSettings"));
  };

  const close = () => {
    window.dispatchEvent(new CustomEvent("closeCookieSettings"));
  };

  return { isOpen, open, close };
}
