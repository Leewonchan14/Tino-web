import React from "react";
import Skeleton from "react-loading-skeleton";
import TinoIcon from "../../../assets/tino_icon.png";

const ExistOwnLog = ({ ownLogState }) => {
  return (
    <div
      className={
        "flex w-full bg-primary-100 flex-col justify-center items-center h-full " +
        "mobile:h-full mobile:flex-row mobile:w-full mobile:justify-evenly mobile:items-center"
      }
    >
      <div className={"text-3xl"}>{ownLogState?.ranking}</div>
      <div
        className={
          "rounded-full border-[1px] border-white overflow-clip"
        }
      >
        <img
          className={"h-20 w-20"}
          src={ownLogState?.user?.profileImageURL || TinoIcon}
          alt=""
        />
      </div>
      <div className={"font-bold"}>{ownLogState?.user?.nickname}</div>
      <div className={"text-2xl text-center"}>
        {ownLogState?.gameScore}
      </div>
    </div>
  );
};

export const OwnLogSkeleton = () => {
  return (
    <div
      className={
        "flex w-full bg-primary-100 flex-col justify-center items-center h-full blur " +
        "mobile:h-full mobile:flex-row mobile:w-full mobile:justify-evenly mobile:items-center"
      }
    >
      <div></div>
      <div
        className={
          "rounded-full h-20 border-[1px] border-white overflow-clip"
        }
      >
        <Skeleton containerClassName={"flex h-full"} />
      </div>
      <div className={"font-bold"}>
        <Skeleton containerClassName={"flex h-full"} />
      </div>
      <div className={"text-2xl text-center"}>
        <Skeleton containerClassName={"flex h-full"} />
      </div>
    </div>
  );
};

export default ExistOwnLog;
