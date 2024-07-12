import React from "react";

function ButtonComp({ text, onClick }) {
  return (
    <button
      className={
        "w-full border-[1px] border-black h-[3.5rem] rounded-lg p-[5px] my-4 font-G_MARKET bg-blue-600 text-white font-bold text-xl "
      }
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default ButtonComp;
