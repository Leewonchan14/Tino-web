import TinoIcon from "../../../assets/tino_icon.png";
import React from "react";

const ExistOwnLog = ({ ownLogState }) => {
  return (
    <div
      className={
        "flex w-full bg-primary-100 flex-col justify-center items-center h-full " +
        "mobile:h-full mobile:flex-row mobile:w-full mobile:justify-evenly mobile:items-center"
      }
    >
      <div className={"text-3xl"}>{ownLogState.ranking}</div>
      <div className={"rounded-full border-[1px] border-white overflow-clip"}>
        <img className={"h-20"} src={TinoIcon} alt="" />
      </div>
      <div className={"font-bold"}>{ownLogState.user.nickname}</div>
      <div className={"text-2xl text-center"}>{ownLogState.gameScore}</div>
    </div>
  );
};

export default ExistOwnLog;
