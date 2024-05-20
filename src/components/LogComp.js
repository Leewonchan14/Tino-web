import React from 'react';
import {useGetLogsByGameId} from "../hooks/useGetLogsByGameId";
import {useInfiniteScroll} from "../hooks/useInfiniteScroll";
import Spinner from "../assets/Spinner.gif";
import {useGetOwnLog} from "../hooks/useGetOwnLog";
import TinoIcon from "../assets/tino_icon.png";
import {G_MARKET_FONT} from "../constant/FontFamily";


const OwnLogCardComp = ({gameId, userId}) => {
    let {ownLogState, isExist, isFetching} = useGetOwnLog({gameId, userId});

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

    return (
        <>
            {isFetching && <LoadingSpinner/>}

            {/*<OwnLogComp/>*/}
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
    return (
        <>
            <div className={"mx-1 py-2 flex justify-center items-center w-[90%]"}>
                <div className={"text-3xl w-20 text-center"}>{index + 1}등</div>
                <div className={"rounded-full border-2 mx-3"}>
                    <img className={"h-16"}
                        src={"https://tinos-images-storage.s3.ap-northeast-2.amazonaws.com/default_user_image.png"}
                         // src={TinoIcon}
                         alt=""/>
                </div>
                <div className={"text-2xl font-bold"}>{log.userId}</div>
                <div>{log.user.nickname}</div>
                <div className={"text-2xl flex-1 text-center"}>{log.gameScore}점</div>
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


const LogComp = ({gameId, userId}) => {
    return (
        <>
            <div className={"mt-10 text-3xl mb-4"}>Top 10</div>
            <div className={"border-2 w-full h-80 rounded-3xl mb-4 flex"}>
                <div className={"w-52 flex justify-center items-center"}>
                    <OwnLogCardComp gameId={gameId} userId={userId}/>
                </div>
                <LogCompListIntGameDetailPage gameId={gameId}/>
            </div>
        </>
    )
}

const MemoLogComp = React.memo(LogComp);

export {MemoLogComp as LogComp}