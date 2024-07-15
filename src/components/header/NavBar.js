import React from "react";
import TinoIcon from "../../assets/tino_icon.png";
import { useNavigate } from "react-router-dom";
import { HOME_PATH } from "../../pages/HomePage";
import { LOGIN_PATH } from "../../pages/LoginPage";
import MenuBar from "./MenuBar";
import { userStore } from "../../stores/userStore";
import { MY_PAGE_PATH } from "../../pages/MyPage";
import { useGetUser } from "../../hooks/header/useGetUser";
import Skeleton from "react-loading-skeleton";

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
  let { isFetching, user } = useGetUser();

  let navigate = useNavigate();

  const goMyPage = () => {
    navigate(MY_PAGE_PATH);
  };

  return (
    <div
      className={"flex items-center gap-4 cursor-pointer"}
      onClick={goMyPage}
    >
      <ProfileNickname
        isFetching={isFetching}
        nickname={user?.nickname}
      />
      <ProfileImage
        isFetching={isFetching}
        profileImageURL={user?.profileImageURL}
      />
    </div>
  );
};

const ProfileImage = ({ isFetching, profileImageURL }) => {
  const renderProfileImageWithSkeleton = () => {
    if (isFetching) {
      return (
        <Skeleton
          containerClassName={"flex w-full h-full"}
          circle={true}
        />
      );
    }

    return (
      <img
        draggable={false}
        src={profileImageURL}
        alt={"profile"}
        className={"object-cover w-full h-full"}
      />
    );
  };

  return (
    <div
      className={
        "flex justify-center items-center w-10 h-10 overflow-clip rounded-full border-[1px]"
      }
    >
      {renderProfileImageWithSkeleton()}
    </div>
  );
};

const ProfileNickname = ({ isFetching, nickname }) => {
  if (isFetching) {
    return <Skeleton containerClassName={"w-16"} />;
  }

  return nickname;
};

export default NavBar;
