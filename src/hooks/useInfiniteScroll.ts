import { useCallback, useRef } from 'react';

function useInfiniteScroll({
  hasNextPage,
  fetchNextPage
}: {
  hasNextPage?: boolean;
  fetchNextPage: () => void;
}) {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const lastItemRef = useCallback((node: HTMLDivElement) => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      {
        rootMargin: '200% 0px'
      }
    );

    if (node) {
      observerRef.current.observe(node);
    }
  }, []);

  return {
    lastItemRef
  };
}

export default useInfiniteScroll;
