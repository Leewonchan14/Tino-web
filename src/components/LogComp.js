import React, {useEffect} from 'react';
import {useGetLogsByGameId} from "../hooks/useGetLogsByGameId";
import {useInfiniteScroll} from "../hooks/useInfiniteScroll";
import Spinner from "../assets/Spinner.gif";
import {useGetOwnLog} from "../hooks/useGetOwnLog";


const OwnLogCardComp = ({gameId, userId}) => {
    let [ownLogState, _, isExist, isFetching, findBestLogByGameId] = useGetOwnLog({
        "user": {
            "profileImageURL": "",
            "nickname": ""
        }
    });
    useEffect(() => {
        findBestLogByGameId(gameId, userId);
    }, []);
    return (
        <>
            {isFetching && <div className={""}>
                <img src={Spinner} alt=""/>
            </div>}

            {!isFetching && isExist &&
                <div className={"mx-1 flex w-44 flex-col justify-center items-center h-full "}>
                    <div className={"text-3xl"}>{ownLogState.ranking}등</div>
                    <div className={"rounded-full border-2 my-4"}>
                        <img className={"h-20"} src={ownLogState.user.profileImageURL} alt=""/>
                    </div>
                    <div className={"text-2xl font-bold"}>{ownLogState.userId}</div>
                    <div className={"ml-auto text-2xl"}>{ownLogState.score}</div>
                    <div>{ownLogState.user.nickname}</div>
                </div>}

            {!isFetching && !isExist &&
                <div className={"mx-1 flex w-44 flex-col justify-center items-center h-full "}>
                    <div style={{fontFamily: "GmarketSans"}} className={"text-3xl text-center"}>게임기록이 <br/> 없습니다.</div>
                </div>}

            <div className={"border-2 h-full"}></div>
        </>
    )
}


function LogCardComp({log, index, className}) {
    return (
        <>
            <div className={"mx-1 py-2 flex justify-center items-center w-[90%]"}>
                <div className={"text-3xl"}>{index + 1}등</div>
                <div className={"rounded-full border-2"}>
                    <img className={"h-16"} src={log.user.profileImageURL} alt=""/>
                </div>
                <div className={"text-2xl font-bold"}>{log.userId}</div>
                <div>{log.user.nickname}</div>
                <div className={"text-2xl flex-1 text-center"}>{log.gameScore}</div>
            </div>
            <div className={"border-2"}></div>
        </>
    );
}

function LogCompListIntGameDetailPage({gameId}) {
    let [logState, setLogState, findLogsByGameId] = useGetLogsByGameId([]);

    let [loadingComp, isLast] =
        useInfiniteScroll(logState, setLogState, findLogsByGameId, {
            gameId,
            size: 10
        });

    return (
        <div className={"flex-col h-full flex-1 justify-center overflow-y-scroll"}>
            {logState.map((log, index) => {
                return (
                    <LogCardComp log={log} key={log.logId} index={index}/>
                )
            })}
            <div id={"loadingComp"} ref={loadingComp} className={"flex flex-1 justify-center"
                + " " + (isLast ? "h-0" : "h-20")
            }>
                <img className={"w-20"} src={Spinner} alt=""/>
            </div>
        </div>
    )

}

export {LogCardComp, OwnLogCardComp, LogCompListIntGameDetailPage}