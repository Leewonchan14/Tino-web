import React from "react";

const inputStyle = {
  border: "1px solid #000000",
  width: "100%",
  height: "3.5rem",
  borderRadius: "5px",
  padding: "5px",
  margin: "10px 0",
};

function ComboBox({
  onChange,
  value,
  name,
  options,
  className,
  textClass,
}) {
  return (
    <select
      style={inputStyle}
      onChange={onChange}
      name={name}
      value={value}
      className={"font-G_MARKET !lg:w-[60%] " + className}
    >
      {options.map((option, index) => {
        return (
          <option
            className={"text-center " + textClass}
            key={index}
            value={option.value}
          >
            {option.name}
          </option>
        );
      })}
    </select>
  );
}

export default ComboBox;
