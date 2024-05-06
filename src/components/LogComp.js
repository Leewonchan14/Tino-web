import React, {useEffect} from 'react';
import {useGetLogsByGameId} from "../hooks/useGetLogsByGameId";
import {useInfiniteScroll} from "../hooks/useInfiniteScroll";
import Spinner from "../assets/Spinner.gif";
import {useGetOwnLog} from "../hooks/useGetOwnLog";
import {G_MARKET_FONT} from "../constant/FontFamily";


const OwnLogCardComp = ({gameId, userId}) => {
    let {ownLogState, isExist, isFetching, findBestLogByGameId} = useGetOwnLog({});
    useEffect(() => {
        findBestLogByGameId(gameId, userId);
    }, []);


    const LoadingSpinner = () => {
        return (
            <div className={""}>
                <img src={Spinner} alt=""/>
            </div>
        );
    }

    const OwnLogComp = () => {
        return (
            <div className={"mx-1 flex w-44 flex-col justify-center items-center h-full "}>
                <div className={"text-3xl"}>{ownLogState.ranking}등</div>
                <div className={"rounded-full border-2 my-4"}>
                    <img className={"h-20"} src={ownLogState.user.profileImageURL} alt=""/>
                </div>
                <div className={"text-2xl font-bold"}>{ownLogState.userId}</div>
                <div className={"ml-auto text-2xl"}>{ownLogState.score}</div>
                <div>{ownLogState.user.nickname}</div>
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

    return (
        <>
            {isFetching && <LoadingSpinner/>}

            {!isFetching && isExist &&
                <OwnLogComp/>
            }

            {!isFetching && !isExist &&
                <NotExistComp/>
            }

            <div className={"border-2 h-full"}></div>
        </>
    )
}


function LogCardComp({log, index, className}) {
    console.log(log.user);
    return (
        <>
            <div className={"mx-1 py-2 flex justify-center items-center w-[90%]"}>
                <div className={"text-3xl"}>{index + 1}등</div>
                <div className={"rounded-full border-2"}>
                    <img className={"h-16"} src={"https://tinos-images-storage.s3.ap-northeast-2.amazonaws.com/default_user_image.png"} alt=""/>
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
            {logState.map((log, index) =>
                <LogCardComp log={log} key={log.logId} index={index}/>
            )}
            {!isLast && <div id={"loadingComp"} ref={loadingComp} className={"flex flex-1 justify-center"}>
                <img className={"w-20"} src={Spinner} alt=""/>
            </div>}
        </div>
    )

}

export {LogCardComp, OwnLogCardComp, LogCompListIntGameDetailPage}