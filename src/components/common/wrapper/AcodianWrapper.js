import { useRef } from "react";

export const AcodianWrapper = ({ children, isOpen, duration = 500 }) => {
  const heightRef = useRef(null);
  return (
    <div
      ref={heightRef}
      style={{
        height: isOpen ? `${heightRef.current?.scrollHeight}px` : "0px",
        transitionDuration: `${duration}ms`,
      }}
      className={"mb-4 transition-all delay-0 overflow-clip"}
    >
      {children}
    </div>
  );
};
