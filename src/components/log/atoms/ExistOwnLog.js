import TinoIcon from "../../../assets/tino_icon.png";
import React from "react";

const ExistOwnLog = () => {
    return (
        <div className={"mx-1 flex w-44 flex-col justify-center items-center h-full "}>
            <div className={"text-3xl"}>1등</div>
            <div className={"rounded-full border-2 my-4"}>
                <img className={"h-20"} src={TinoIcon} alt=""/>
            </div>
            {/*<div className={"text-2xl font-bold"}>유저 아이디</div>*/}
            <div>유저 닉네임</div>
            <div className={"text-2xl text-center"}>30</div>
        </div>
    )
}

export default ExistOwnLog;