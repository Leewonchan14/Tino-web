import React from 'react';
import {useGetLogsByGameId} from "../../hooks/log/useGetLogsByGameId";
import LoadingSpinner from "../common/spinner/LoadingSpinner";
import useReactQueryInfiniteScroll from "../../hooks/recycle/useReactQueryInfiniteScroll";
import Log, {LogSkeleton} from "./Log";


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
        <div className={"flex-col h-full flex-1 justify-center overflow-y-scroll mobile:h-64"}>
            <table className={"w-full"}>
                <thead className={"border-b-2"}>
                <tr>
                    <th className={"w-20"}>순위</th>
                    <th className={"text-start pl-3"}>사용자</th>
                    <th className={""}>점수</th>
                </tr>
                </thead>
                <tbody>
                {isSuccess && logState.pages.map((page, pageIndex) => (
                        page.map((log, logIndex) => <Log log={log} key={log.logId}
                                                         index={pageIndex * pageSize + logIndex}/>)
                    )
                )}
                </tbody>
            </table>

            {/*{isSuccess && Array.from({length : 10}).map((_, index) => {*/}
            {/*    return <LogSkeleton key={index} />*/}
            {/*})}*/}
            <LoadingSpinner loadingComp={loadingComp} isFetching={isFetching}/>
        </div>
    )

}


export default LogList;