import { removeLocalData } from "../../utils/LocalStorageController";
import { HOME_PATH } from "../../pages/HomePage";
import { useNavigate } from "react-router-dom";
import { userStore } from "../../stores/userStore";
import React from "react";

export const UpdateActiveButton = ({
  isActiveInput,
  handleClickActiveButton,
  handleOnClickUpdateButton,
}) => {
  const renderUpdateButton = () => {
    if (isActiveInput) {
      return (
        <UserUpdateButton
          handleOnClickUpdateButton={handleOnClickUpdateButton}
        />
      );
    }

    return (
      <span
        onClick={handleClickActiveButton}
        className={"text-primary-600 h-10 underline cursor-pointer"}
      >
        수정
      </span>
    );
  };

  return (
    <div className={`w-full flex ${isActiveInput && "justify-end"}`}>
      {renderUpdateButton()}
    </div>
  );
};

export const UserUpdateButton = ({
  className,
  handleOnClickUpdateButton,
}) => {
  return (
    <button
      onClick={handleOnClickUpdateButton}
      className={`rounded-lg bg-primary-600 w-24 h-10 text-lg text-white font-G_MARKET font-bold ${className}`}
    >
      확인
    </button>
  );
};

export const LogoutButton = ({ className }) => {
  let navigate = useNavigate();
  const { changeIsLogin } = userStore((state) => state);

  const handleOnClick = () => {
    let isLogoutOk = window.confirm("로그아웃 하시겠습니까?");
    if (isLogoutOk) {
      removeLocalData();
      changeIsLogin(false);
      navigate(HOME_PATH);
    }
  };

  return (
    <button
      onClick={handleOnClick}
      className={`rounded-lg bg-red-500 w-[120px] h-10 text-lg text-white font-G_MARKET font-bold ${className}`}
    >
      로그아웃
    </button>
  );
};
