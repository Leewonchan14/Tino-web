import { useEffect, useRef, useState } from "react";

export const useInfiniteScroll = (
  state,
  setState,
  callback,
  callbackArg
) => {
  const isFetching = useRef(false);
  const page = useRef(0);
  const loadingComp = useRef(null);

  const [isLast, setIsLast] = useState(false);

  const fetchData = async () => {
    isFetching.current = true;
    let response = await callback({
      page: page.current,
      ...callbackArg,
    });
    isFetching.current = false;

    if (response.length === 0) {
      setIsLast(true);
    }
  };

  const initScroll = async () => {
    page.current = 0;
    setIsLast(false);
    setState([]);
  };

  useEffect(() => {
    const handleObserver = (entries) => {
      const target = entries[0];
      if (target.isIntersecting && !isFetching.current) {
        fetchData();
        page.current++;
      }
    };

    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0,
    });

    const observerTarget = loadingComp.current;
    if (observerTarget) {
      observer.observe(observerTarget);
    }

    return () => observer.disconnect();
  }, [state]);

  return [loadingComp, isLast, initScroll];
};
