import { useEffect, useRef } from "react";

const useReactQueryInfiniteScroll = ({
  fetchData,
  isFetching,
  hasNextPage,
}) => {
  const loadingComp = useRef();

  useEffect(() => {
    const handleObserver = (entries) => {
      const target = entries[0];

      if (isFetching) return;
      if (!hasNextPage) return;
      if (!target.isIntersecting) return;

      fetchData();
    };

    const observer = new IntersectionObserver(handleObserver, {
      root: loadingComp?.current?.parentElement,
      rootMargin: "400px",
    });

    const observerTarget = loadingComp.current;
    if (observerTarget) {
      observer.observe(observerTarget);
    }

    return () => observer.disconnect();
  }, [isFetching]);

  return { loadingComp };
};

export default useReactQueryInfiniteScroll;
