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

export const MY_PAGE_PATH = "/mypage";

export const MyPage = () => {
  let { user } = useGetUser();

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
      <div className={"flex justify-center"}>
        <LogoutButton className={""} />
      </div>
    </>
  );
};

const src =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEdw67K7dC_tAz6cwn64PyZRirAHi8Vdgd-A&s";
