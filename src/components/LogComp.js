import React, {useEffect, useRef, useState} from 'react';
import TinoIcon from "../assets/tino_icon.png";
import {useGetLogsByGameId} from "../hooks/useGetLogsByGameId";

const PreNextLogButton = ({text, onClick, page}) => {
    return (
        <div className={"flex"}>
            <button className={"bg-blue-600 text-white font-bold rounded-lg"
                + (page === 0 && text === "이전" ? " cursor-not-allowed" : " cursor-pointer")
            }
                    onClick={onClick}>{text}</button>
        </div>
    )
}

const OwnLogCardComp = () => {
    const [ownLog, setOwnLog] = useState({
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
        <LogCardComp log={ownLog} index={ownLog.ranking} className={"!w-full border-none"}/>
    )
}



function LogCardComp({log, index, className}) {
    return (
        <div className={"rounded-lg mx-1 border-2 flex w-44 flex-col justify-center items-center h-full "
            + className
        }>
            <div className={"text-3xl"}>{index + 1}등</div>
            <div className={"rounded-full border-2 my-4"}>
                <img className={"h-20"} src={TinoIcon} alt=""/>
            </div>
            <div className={"text-2xl font-bold"}>{log.userId}</div>
            <div className={"ml-auto text-2xl"}>{log.score}</div>
            <div>{log.user.nickname}</div>
        </div>
    );
}

function SkeletonLogCardComp() {
    return (
        <div className={"rounded-lg mx-1 border-2 flex w-44 flex-col justify-center items-center h-full"}>
            <div className={"text-3xl"}>1등</div>
            <div className={"rounded-full border-2 my-4"}>
                <img className={"h-20"} src={TinoIcon} alt=""/>
            </div>
            <div className={"text-2xl font-bold"}>유저이름</div>
            <div className={"ml-auto text-2xl"}>100</div>
            <div>닉네임</div>
        </div>
    );
}

function LogCompListIntGameDetailPage({gameId}) {
    const [page, setPage] = useState(0);
    let [logState, setLogState, findLogsByGameId] = useGetLogsByGameId([{
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
        }
    },]);
    useEffect(() => {
        findLogsByGameId({gameId, page: page, size: 3});
    }, []);

    const nextClick = (cut) => {
        setPage( (page) => {
            let nextPage = page + cut
            if (nextPage < 0) {
                return 0;
            }
            if (nextPage * 3 >= logState.length) {
                findLogsByGameId({gameId, page: nextPage, size: 3});
            }
            return nextPage;
        });
    }

    return (
        <div className={"flex h-full flex-1 p-2 justify-center"}>
            <PreNextLogButton text={"이전"} onClick={() => {
                nextClick(-1)
            }} page={page}/>
            {logState.slice(page * 3, page * 3 + 3).map((log, index) => {
                return (
                    <LogCardComp log={log} key={log.logId} index={page * 3 + index}/>
                )
            })}
            <PreNextLogButton text={"다음"} onClick={() => {
                nextClick(1)
            }} page={page}/>
        </div>
    )

}

export {LogCardComp, OwnLogCardComp, LogCompListIntGameDetailPage}