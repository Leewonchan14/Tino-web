import React from "react";
import TinoIcon from "../../assets/tino_icon.png";
import { useNavigate } from "react-router-dom";
import { HOME_PATH } from "../../pages/HomePage";
import { LOGIN_PATH } from "../../pages/LoginPage";
import MenuBar from "./MenuBar";

function NavBar({ ...rest }) {
  let navigate = useNavigate();

  const onLogin = () => {
    navigate(LOGIN_PATH);
  };
  const goHome = () => {
    navigate(HOME_PATH);
  };

  return (
    <div className={"h-28 flex justify-between py-4 px-4 mb-6 items-center"}>
      <picture
        onClick={goHome}
        className={
          "relative overflow-clip block rounded-full bg-white w-20 h-20 mobile:w-14 mobile:h-14 " +
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

      {/* 로그인 버튼 */}
      <div onClick={onLogin} className={"cursor-pointer z-0"}>
        로그인
      </div>
    </div>
  );
}

export default NavBar;
