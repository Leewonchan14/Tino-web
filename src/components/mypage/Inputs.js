import {
  nicknameTextSizeInMyPage,
  USER_OBJECT_KEY,
} from "../../utils/userConverter";
import ComboBox from "../common/input/ComboBox";
import { MAJOR } from "../../constants/Major";
import React from "react";

export const UpdateInput = ({ handleOnChange, name, value }) => {
  const onChange = (e) => {
    handleOnChange(e.target.name, e.target.value);
  };

  if (name === USER_OBJECT_KEY.MAJOR) {
    return (
      <ComboBox
        value={value}
        name={name}
        className={"!m-0 !h-auto !w-auto !box-border"}
        onChange={onChange}
        options={MAJOR}
      />
    );
  }

  return (
    <input
      className={`border-2 min-w-0 w-full rounded-md box-border
      ${nicknameTextSizeInMyPage(name)}`}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};
