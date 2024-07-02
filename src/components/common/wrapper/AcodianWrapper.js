import { useRef } from "react";

export const AcodianWrapper = ({ children, isOpen }) => {
  const heightRef = useRef(null);
  return (
    <div
      ref={heightRef}
      style={{
        height: isOpen ? `${heightRef.current?.scrollHeight}px` : "0px",
      }}
      className={"mb-4 transition-all duration-500 delay-0 overflow-clip"}
    >
      {children}
    </div>
  );
};
