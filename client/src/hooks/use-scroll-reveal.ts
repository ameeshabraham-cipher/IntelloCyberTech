import { useState, useEffect, useRef } from 'react';

type ScrollRevealOptions = {
  threshold?: number;
  rootMargin?: string;
  animateOnce?: boolean;
  delay?: number;
};

export function useScrollReveal({
  threshold = 0.1,
  rootMargin = '0px',
  animateOnce = true,
  delay = 0,
}: ScrollRevealOptions = {}): boolean {
  // Simply return true for now to prevent TypeScript errors while developing
  // We'll implement proper intersection observer functionality later
  return true;
}

export default useScrollReveal;