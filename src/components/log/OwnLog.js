import { useGetOwnLog } from "../../hooks/log/useGetOwnLog";
import React from "react";
import ExistOwnLog, { OwnLogSkeleton } from "./atoms/ExistOwnLog";

import TinoIcon from "../../assets/tino_icon.png";

const OwnLog = ({ gameId }) => {
  return (
    <div
      className={
        "w-52 border-r-2 flex justify-center items-center " +
        "mobile:border-r-0 mobile:border-b-2 mobile:w-full mobile:h-20"
      }
    >
      <SwitchLogComp gameId={gameId} />
    </div>
  );
};

const SwitchLogComp = ({ gameId }) => {
  let { ownLogState, isExist, isFetching, isLogin } = useGetOwnLog({
    gameId,
  });

  if (!isLogin) {
    return <BlurOwnLog text={"로그인이 필요합니다."} />;
  }

  if (isFetching) {
    return <OwnLogSkeleton />;
  }

  if (!isExist) {
    return <BlurOwnLog text={"게임 기록이 없습니다."} />;
  }

  return <ExistOwnLog ownLogState={ownLogState} />;
};

const BlurOwnLog = ({ text }) => {
  return (
    <>
      <div
        className={
          "flex w-full bg-primary-100 flex-col justify-center items-center h-full blur-md " +
          "mobile:h-full mobile:flex-row mobile:w-full mobile:justify-evenly mobile:items-center"
        }
      >
        <div className={"text-3xl"}>{1}</div>
        <div
          className={
            "rounded-full border-[1px] border-white overflow-clip"
          }
        >
          <img className={"h-20"} src={TinoIcon} alt="" />
        </div>
        <div className={"font-bold"}>티노</div>
        <div className={"text-2xl text-center"}>0000</div>
      </div>
      <span className={"absolute font-G_MARKET"}>{text}</span>
    </>
  );
};

export default OwnLog;
