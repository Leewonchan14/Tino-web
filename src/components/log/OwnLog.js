import {useGetOwnLog} from "../../hooks/log/useGetOwnLog";
import {G_MARKET_FONT} from "../../constant/FontFamily";
import React from "react";
import LoadingSpinner from "../common/spinner/LoadingSpinner";
import ExistOwnLog from "./atoms/ExistOwnLog";

const OwnLog = ({gameId, userId}) => {
    let {ownLogState, isExist, isFetching} = useGetOwnLog({gameId, userId});

    return (
        <div className={"w-52 flex justify-center items-center"}>
            {isFetching && <LoadingSpinner isFetching={isFetching} className={""}/>}

            {!isFetching && isExist &&
                <ExistOwnLog />
            }

            {!isFetching && !isExist &&
                <OwnLogNotExist/>
            }

            <div className={"border-2 h-full"}></div>
        </div>
    )
}


const OwnLogNotExist = () => {
    return (
        <div className={"mx-1 flex w-44 flex-col justify-center items-center h-full "}>
            <div style={{fontFamily: G_MARKET_FONT}} className={"text-3xl text-center"}>
                게임기록이 <br/> 없습니다.
            </div>
        </div>
    )
}


export default OwnLog;