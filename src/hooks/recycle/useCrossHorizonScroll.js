import { useEffect } from "react";

const useCrossHorizonScroll = (scrollContainer) => {
  useEffect(() => {
    if (!scrollContainer) return;

    const onWheel = (event) => {
      // event.deltaY를 사용하여 좌우 스크롤
      scrollContainer.scrollLeft -= Number(event.deltaY);
      scrollContainer.scrollLeft += Number(event.deltaX);
      // 기본 상하 스크롤을 방지
      event.preventDefault();
    };

    scrollContainer.addEventListener("wheel", onWheel);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      scrollContainer.removeEventListener("wheel", onWheel);
    };
  }, [scrollContainer]);
};
export default useCrossHorizonScroll;
