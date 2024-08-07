import React, { useEffect, useRef } from "react";

const inputStyle = {
  border: "1px solid #000000",
  width: "100%",
  height: "auto",
  borderRadius: "5px",
  padding: "20px",
  margin: "10px 0",
};
const AutoResizeTextInputComp = ({
  onChange,
  value,
  placeholder,
  name = "inputUserId",
  className,
}) => {
  const textAreaRef = useRef();
  useEffect(() => {
    const textarea = textAreaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [value]);

  return (
    <textarea
      ref={textAreaRef}
      style={inputStyle}
      onChange={onChange}
      name={name}
      className={"font-G_MARKET overflow-hidden " + className}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default AutoResizeTextInputComp;
