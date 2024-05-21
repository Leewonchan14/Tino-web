import {useEffect, useRef} from "react";

const useReactQueryInfiniteScroll = ({fetchData, isFetching}) => {

    const loadingComp = useRef();

    useEffect(() => {
        const handleObserver = (entries) => {
            const target = entries[0];
            if (target.isIntersecting && !isFetching) {
                fetchData();
            }
        }

        const observer = new IntersectionObserver(handleObserver, {
            threshold: 0
        });

        const observerTarget = loadingComp.current;
        if (observerTarget) {
            observer.observe(observerTarget);
        }

        return () => observer.disconnect();
    }, [isFetching]);


    return {loadingComp};
}

export default useReactQueryInfiniteScroll;