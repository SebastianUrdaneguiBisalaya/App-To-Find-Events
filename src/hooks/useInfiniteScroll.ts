import { useCallback, useRef } from "react";

type UseInfiniteScrollProps = {
  loading: boolean;
  hasMore: boolean;
  onIntersect: () => void;
};

export const useInfiniteScroll = ({ loading, hasMore, onIntersect }: UseInfiniteScrollProps) => {
  const observer = useRef<IntersectionObserver | null>(null);
  const lastElementRef = useCallback(
    (node: HTMLAnchorElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          onIntersect();
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasMore, onIntersect],
  );

  return lastElementRef;
};
