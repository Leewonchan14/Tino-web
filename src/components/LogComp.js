import React, {useState} from 'react';
import TinoIcon from "../assets/tino_icon.png";
import {useGetLogsByGameId} from "../hooks/useGetLogsByGameId";
import {useInfiniteScroll} from "../hooks/useInfiniteScroll";
import Spinner from "../assets/Spinner.gif";


const OwnLogCardComp = () => {
    const [ownLog, _] = useState({
        "logId": 6414,
        "gameId": 51,
        "gameScore": 66,
        "createdAt": "2024-01-16T02:36:14.612",
        "user": {
            "userId": "1",
            "nickname": "nick 1",
            "email": "test1@test.com",
            "profileImageURL": "https://tinos-images-storage.s3.ap-northeast-2.amazonaws.com/default_user_image.png",
            "parentMajor": "컴퓨터공학부",
            "major": "컴퓨터공학과"
        },
        "ranking": 1
    })
    return (
        <>
            <div className={"mx-1 flex w-44 flex-col justify-center items-center h-full "}>
                <div className={"text-3xl"}>{ownLog.ranking + 1}등</div>
                <div className={"rounded-full border-2 my-4"}>
                    <img className={"h-20"} src={TinoIcon} alt=""/>
                </div>
                <div className={"text-2xl font-bold"}>{ownLog.userId}</div>
                <div className={"ml-auto text-2xl"}>{ownLog.score}</div>
                <div>{ownLog.user.nickname}</div>
            </div>
            <div className={"border-2 h-full"}></div>
        </>
    )
    // <LogCardComp log={ownLog} index={ownLog.ranking} className={"!w-full border-none"}/>
}


function LogCardComp({log, index, className}) {
    return (
        <>
            <div className={"mx-1 py-2 flex justify-center items-center w-[90%]"}>
                <div className={"text-3xl"}>{index + 1}등</div>
                <div className={"rounded-full border-2"}>
                    <img className={"h-16"} src={TinoIcon} alt=""/>
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