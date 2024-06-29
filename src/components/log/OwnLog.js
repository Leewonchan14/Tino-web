import {useGetOwnLog} from "../../hooks/log/useGetOwnLog";
import {G_MARKET_FONT} from "../../constants/FontFamily";
import React from "react";
import LoadingSpinner from "../common/spinner/LoadingSpinner";
import ExistOwnLog from "./atoms/ExistOwnLog";

const OwnLog = ({gameId, userId}) => {
    let {ownLogState, isExist, isFetching} = useGetOwnLog({gameId, userId});

    return (
        <div className={"w-52 border-r-2 flex justify-center items-center mobile:border-r-0 mobile:border-b-2 mobile:w-full"}>
            {isFetching && <LoadingSpinner isFetching={isFetching} className={""}/>}

            {!isFetching && isExist &&
                <ExistOwnLog />
            }

            {!isFetching && !isExist &&
                <OwnLogNotExist/>
            }
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