import { useEffect } from "react";

export function usePrefetchImages(urls: string[]) {
  useEffect(() => {
    urls.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  }, [urls]);
} 