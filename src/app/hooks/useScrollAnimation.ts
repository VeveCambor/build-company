import { useEffect, useState, RefObject } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  delay?: number;
  rootMargin?: string;
}

export const useScrollAnimation = (
  elementRef: RefObject<HTMLElement | null>,
  options: ScrollAnimationOptions = {}
): boolean => {
  const [isVisible, setIsVisible] = useState(false);
  const { threshold = 0.01, delay = 0, rootMargin = "50px" } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Použijeme větší rootMargin, aby animace začala dříve
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Přidáme zpoždění pro plynulejší animace prvků
          if (delay > 0) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
          } else {
            // Pro prvky bez zpoždění, abychom předešli zaseknutí
            requestAnimationFrame(() => {
              setIsVisible(true);
            });
          }
          
          // Po zobrazení prvku už nepotřebujeme dále sledovat
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [elementRef, threshold, delay, rootMargin]);

  return isVisible;
}; 