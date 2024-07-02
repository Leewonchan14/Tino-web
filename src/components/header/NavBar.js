import React from "react";
import TinoIcon from "../../assets/tino_icon.png";
import { useNavigate } from "react-router-dom";
import { HOME_PATH } from "../../pages/HomePage";
import { LOGIN_PATH } from "../../pages/LoginPage";
import MenuBar from "./MenuBar";
import { userStore } from "../../stores/userStore";
import { removeLocalData } from "../../utils/LocalStorageController";

function NavBar({ ...rest }) {
  let navigate = useNavigate();
  const { isLogin } = userStore((state) => state);

  return (
    <div
      className={
        "relative h-20 flex justify-between px-4 mb-6 items-center z-10"
      }
    >
      <picture
        onClick={() => {
          navigate(HOME_PATH);
        }}
        className={
          "absolute left-2 overflow-clip block rounded-full bg-white w-20 h-20 mobile:w-14 mobile:h-14 " +
          "shadow-lg shadow-gray-200 z-10 cursor-pointer overflow-clip border-[1px]"
        }
      >
        <img
          draggable={false}
          src={TinoIcon}
          alt={"logo"}
          className={"w-44 absolute top-1/3"}
        />
      </picture>

      {/* 게임, 랭킹, 메뉴 버튼 */}
      <MenuBar />

      <div className={"absolute right-2 flex justify-center"}>
        {/* 로그인 버튼 */}
        {!isLogin ? <LoginButton /> : <HeaderProfile />}
      </div>
    </div>
  );
}

const LoginButton = () => {
  let navigate = useNavigate();

  const onLogin = () => {
    navigate(LOGIN_PATH);
  };

  return (
    <div onClick={onLogin} className={"cursor-pointer z-0"}>
      로그인
    </div>
  );
};

const HeaderProfile = () => {
  const { changeIsLogin } = userStore((state) => state);

  return (
    <div className={"flex items-center"}>
      <div className={"w-10 h-10 overflow-clip rounded-full border-[1px]"}>
        <img src={TinoIcon} alt={"profile"} className={"w-10"} />
      </div>
      <div
        className={"ml-2 text-nowrap cursor-pointer"}
        onClick={() => {
          removeLocalData();
          changeIsLogin(false);
        }}
      >
        로그아웃
      </div>
    </div>
  );
};

export default NavBar;
