import React from "react";
import RankCard from "./RankCard";
import RankHeader from "./RankHeader";
import LoadingSpinner from "../common/spinner/LoadingSpinner";
import useReactQueryInfiniteScroll from "../../hooks/recycle/useReactQueryInfiniteScroll";
import useGetGameRankInfiniteQuery from "../../hooks/queries/rank/useGetGameRankInfiniteQuery";

const GameRankList = ({sortMenu}) => {

    let {
        gameState,
        isFetching,
        isSuccess,
        fetchNextPage
    } = useGetGameRankInfiniteQuery({sortMenu});

    let {loadingComp} = useReactQueryInfiniteScroll({
        isFetching,
        fetchData: fetchNextPage
    })

    return (
        <section className={"w-full"}>
            <RankHeader score={sortMenu.text} item={"게임"}/>
            {isSuccess && gameState.pages.map((page, index) => (
                page.map((game, subIndex) =>
                    <RankCard
                        key={game.gameId} rank={index * 10 + subIndex + 1}
                        score={game[sortMenu.score]} text={game.gameName}
                        picture={game.gameImage}/>)
            ))}

            <LoadingSpinner loadingComp={loadingComp} isFetching={isFetching}/>
        </section>
    )
}

export default GameRankList;