import React from 'react';
import {useGetLogsByGameId} from "../../hooks/log/useGetLogsByGameId";
import LoadingSpinner from "../common/spinner/LoadingSpinner";
import useReactQueryInfiniteScroll from "../../hooks/recycle/useReactQueryInfiniteScroll";
import OwnLogCardComp from "./OwnLogComp";


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

function LogCompListInGame({gameId}) {
    const pageSize = 10;

    let {isSuccess, isFetching, logState, fetchNextPage} = useGetLogsByGameId({
        gameId,
        pageSize
    });

    let {loadingComp} = useReactQueryInfiniteScroll({
        fetchData: fetchNextPage,
        isFetching
    })

    return (
        <div className={"flex-col h-full flex-1 justify-center overflow-y-scroll"}>
            {isSuccess && logState.pages.map((page, pageIndex) => (
                    page.map((log, logIndex) => <LogCardComp log={log} key={log.logId}
                                                             index={pageIndex * pageSize + logIndex}/>)
                )
            )}
            <LoadingSpinner loadingComp={loadingComp} isFetching={isFetching}/>
        </div>
    )

}


const LogListCompInGame = ({gameId, userId}) => {
    return (
        <>
            <div className={"mt-10 text-3xl mb-4"}>Top 10</div>
            <div className={"border-2 w-full h-80 rounded-3xl mb-4 flex"}>
                <OwnLogCardComp gameId={gameId} userId={userId}/>
                <LogCompListInGame gameId={gameId}/>
            </div>
        </>
    )
}

export default LogListCompInGame;