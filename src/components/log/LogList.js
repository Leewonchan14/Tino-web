import React from 'react';
import {useGetLogsByGameId} from "../../hooks/log/useGetLogsByGameId";
import LoadingSpinner from "../common/spinner/LoadingSpinner";
import useReactQueryInfiniteScroll from "../../hooks/recycle/useReactQueryInfiniteScroll";
import Log from "./Log";


function LogList({gameId}) {
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
                    page.map((log, logIndex) => <Log log={log} key={log.logId}
                                                     index={pageIndex * pageSize + logIndex}/>)
                )
            )}
            <LoadingSpinner loadingComp={loadingComp} isFetching={isFetching}/>
        </div>
    )

}


export default LogList;