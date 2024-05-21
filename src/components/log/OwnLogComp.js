import {useGetOwnLog} from "../../hooks/log/useGetOwnLog";
import TinoIcon from "../../assets/tino_icon.png";
import {G_MARKET_FONT} from "../../constant/FontFamily";
import React from "react";
import LoadingSpinnerComp from "../common/spinner/LoadingSpinnerComp";

const OwnLogComp = () => {
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


const NotExistComp = () => {
    return (
        <div className={"mx-1 flex w-44 flex-col justify-center items-center h-full "}>
            <div style={{fontFamily: G_MARKET_FONT}} className={"text-3xl text-center"}>
                게임기록이 <br/> 없습니다.
            </div>
        </div>
    )
}


const OwnLogCardComp = ({gameId, userId}) => {
    let {ownLogState, isExist, isFetching} = useGetOwnLog({gameId, userId});

    return (
        <div className={"w-52 flex justify-center items-center"}>
            {isFetching && <LoadingSpinnerComp isFetching={true} className={""}/>}

            {!isFetching && isExist &&
                <OwnLogComp/>
            }

            {!isFetching && !isExist &&
                <NotExistComp/>
            }

            <div className={"border-2 h-full"}></div>
        </div>
    )
}

export default OwnLogCardComp;