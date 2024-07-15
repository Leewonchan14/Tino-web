import Skeleton from "react-loading-skeleton";
import React from "react";
import { useGetUser } from "../../hooks/header/useGetUser";
import {
  nicknameTextSizeInMyPage,
  USER_OBJECT_KEY,
} from "../../utils/userConverter";
import { UpdateInput } from "./Inputs";

export const UserInfo = ({
  modifiedUser,
  isActiveInput,
  handleOnChange,
  children,
}) => {
  let { isFetching } = useGetUser();

  return (
    <div
      className={
        "flex flex-col flex-1 justify-center items-start font-G_MARKET text-xl gap-3 " +
        "mobile:text-lg mobile:w-full"
      }
    >
      {Object.values(USER_OBJECT_KEY)
        .filter((key) => key !== USER_OBJECT_KEY.PROFILE_IMAGE_URL)
        .map((key) => (
          <ShowInfoComp
            key={key}
            isFetching={isFetching}
            isActiveInput={isActiveInput}
            handleOnChange={handleOnChange}
            name={key}
            value={modifiedUser?.[key]}
          />
        ))}
      {children}
    </div>
  );
};

const ShowInfoComp = ({
  isFetching,
  handleOnChange,
  isActiveInput,
  name,
  value,
}) => {
  if (isFetching)
    return (
      <Skeleton
        containerClassName={`w-80 ${nicknameTextSizeInMyPage(name)}`}
      />
    );

  if (isActiveInput && name !== USER_OBJECT_KEY.EMAIL)
    return (
      <UpdateInput
        handleOnChange={handleOnChange}
        name={name}
        value={value}
      />
    );

  return <ShowUserData name={name} value={value} />;
};

const ShowUserData = ({ name, value }) => {
  return (
    <div
      className={`flex items-center gap-2 p-[2px]
    ${nicknameTextSizeInMyPage(name)}`}
    >
      <span>{value}</span>
    </div>
  );
};
