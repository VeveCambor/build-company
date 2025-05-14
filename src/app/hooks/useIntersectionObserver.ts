import { useState, useEffect, RefObject } from 'react';

interface UseIntersectionObserverProps {
  ref: RefObject<HTMLElement | null>;
  options?: IntersectionObserverInit;
  threshold?: number;
  rootMargin?: string;
}

export function useIntersectionObserver({
  ref,
  options = {},
  threshold = 0,
  rootMargin = '0px',
}: UseIntersectionObserverProps): boolean {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin,
        ...options,
      }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold, rootMargin, options]);

  return isIntersecting;
} 