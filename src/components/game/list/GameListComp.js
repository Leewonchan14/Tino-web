import React, {useState} from "react";
import useGetGames from "../../../hooks/game/useGetGames";
import useReactQueryInfiniteScroll from "../../../hooks/recycle/useReactQueryInfiniteScroll";
import SortMenuList from "../../header/SortMenuList";
import LoadingSpinnerComp from "../../recycle/LoadingSpinnerComp";
import GameComp from "./GameComp";

const GameCompList = ({...rest}) => {
    const [sortState, setSortState] = useState();

    let {
        isSuccess, isFetching, gameState, fetchNextPage
    } = useGetGames({sortState});

    let {loadingComp} =
        useReactQueryInfiniteScroll({
            fetchData: fetchNextPage,
            isFetching
        });

    return (
        <>
            <h1 className={"text-2xl font-bold mb-6"}>
                전체 게임 {3} 개
            </h1>
            <SortMenuList setSortState={setSortState} className={""} initScroll={() => {
            }}/>
            <section className={"grid grid-cols-3 gap-6 w-full"}>
                {isSuccess && gameState.pages.map((page, index) => (
                    page.map((game) => <GameComp key={index} game={game}/>)
                ))}
            </section>

            <LoadingSpinnerComp loadingComp={loadingComp} isFetching={isFetching}/>

        </>
    );
};

export default GameCompList;