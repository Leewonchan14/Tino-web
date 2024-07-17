import { useGetUser } from "../hooks/header/useGetUser";
import { ProfileImage } from "../components/mypage/ProfileImage";
import { UserInfo } from "../components/mypage/UserInfo";
import React from "react";
import { USER_OBJECT_KEY } from "../utils/userConverter";
import {
  LogoutButton,
  UpdateActiveButton,
} from "../components/mypage/Buttons";
import { useUpdateUser } from "../hooks/mypage/useUpdateUser";
import useMyPage from "../hooks/mypage/useMyPage";
import useGetRecentPlayGameInfiniteQuery from "../hooks/mypage/useGetRecentPlayGameInfiniteQuery";
import GameGrid from "../components/game/GameGrid";

export const MY_PAGE_PATH = "/mypage";

export const GAME_CARD_FETCH_SIZE = 6;

export const MyPage = () => {
  let { user } = useGetUser();

  useMyPage();

  let {
    isActiveInput,
    handleClickActiveButton,
    modifiedUser,
    handleOnChange,
    handleOnClickUpdateButton,
  } = useUpdateUser({ user });

  return (
    <>
      <div
        className={
          "items-center mt-32 mb-10 gap-6 flex mobile:flex-col"
        }
      >
        <ProfileImage
          imageUrl={modifiedUser?.[USER_OBJECT_KEY.PROFILE_IMAGE_URL]}
          isActiveInput={isActiveInput}
          handleOnChange={handleOnChange}
        />
        <div className={"border-l-[1px]"} />
        <UserInfo
          isActiveInput={isActiveInput}
          modifiedUser={modifiedUser}
          handleOnChange={handleOnChange}
        >
          <UpdateActiveButton
            isActiveInput={isActiveInput}
            handleClickActiveButton={handleClickActiveButton}
            handleOnClickUpdateButton={handleOnClickUpdateButton}
          />
        </UserInfo>
      </div>
      <LogoutButton className={""} />
      <hr className={"mt-20"} />
      <h2 className={"font-G_MARKET text-3" + "xl my-12"}>
        최근한 게임들
      </h2>
      <GameGrid hooks={useGetRecentPlayGameInfiniteQuery} />
      <NoRecentPlayGames />
    </>
  );
};

const NoRecentPlayGames = () => {
  let { isFetching, isSuccess, gameState } =
    useGetRecentPlayGameInfiniteQuery();

  let isEmpty =
    !isFetching &&
    isSuccess &&
    gameState?.pages?.flat()?.length === 0;

  if (!isEmpty) return null;

  return (
    <div className={"relative flex justify-center items-center"}>
      <span className={"absolute font-G_MARKET text-lg z-10"}>
        최근한 게임이 없습니다.
      </span>
      <div className={"w-full blur-sm"}>
        <GameGrid hooks={() => ({ isFetching: true })} />
      </div>
    </div>
  );
};

const src =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEdw67K7dC_tAz6cwn64PyZRirAHi8Vdgd-A&s";
