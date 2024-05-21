import React, {useState} from 'react';
import viewcount_icon from "../assets/viewcount_icon.png";
import {useNavigate} from "react-router-dom";
import SortMenuList from "./SortMenuList";
import Spinner from "../assets/Spinner.gif";
import {G_MARKET_FONT} from "../constant/FontFamily";
import {GameController} from "../api/game.controller";
import useReactQueryInfiniteScroll from "../hooks/useReactQueryInfiniteScroll";
import {useInfiniteQuery} from "@tanstack/react-query";

const LoadingComp = ({loadingComp, isFetching}) => {
    return (
        <div ref={loadingComp} className={"flex w-full justify-center"}>
            {isFetching && <img src={Spinner} alt=""/>}
        </div>
    )
}

export function GameCompList({...rest}) {
    const [sortState, setSortState] = useState();

    const findAllGame = async ({page, size, sort}) => {
        const response = await GameController.findAll({
            page, size, sort
        });
        return response.data;
    }

    let {
        data: gameState,
        isFetching,
        fetchNextPage,
        status
    } = useInfiniteQuery({
        queryKey: ['games', {sort: sortState}],
        queryFn: async (args) => {
            return await findAllGame({page: args.pageParam, size: 3, sort: sortState})
        },
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages, lastPageParam) => {
            if (lastPage.length === 0) return undefined;

            return lastPageParam + 1;
        },
        enabled: false,
    })


    let {loadingComp} = useReactQueryInfiniteScroll({
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
                {status === "success" && gameState.pages.map((page, index) => {
                    return  page.map((game) => <GameComp key={index} game={game}/>)
                })}
            </section>

            <LoadingComp loadingComp={loadingComp} isFetching={isFetching}/>

        </>
    );
}

export function GameComp({game}) {
    let navigate = useNavigate();

    const onClick = () => {
        navigate(`/games/${game.gameId}`);
    }

    return (
        <article onClick={onClick}
                 className={"border-2 border-gray-100 relative overflow-clip w-full rounded-2xl cursor-pointer bg-gray-50 flex-col"}>
            <picture className={"block h-44 w-full"}>
                <img className={"bg-gray-100 h-full w-full object-cover"}
                     src={game.gameImage} alt=""/>
            </picture>
            <section className={"h-40 p-6 w-full flex-col flex"}>
                <h1 className={"text-xl"} style={{fontFamily: G_MARKET_FONT}}>
                    {game.gameName}
                </h1>
                <div className={"w-full mt-2 text-gray-600 line-clamp-2"}>
                    {game.description}
                </div>
                <section className={"mt-auto flex"}>
                    <picture className={"w-6 justify-center items-center flex"}>
                        <img src={viewcount_icon} alt=""/>
                    </picture>
                    <span className={"ml-4"}>{game.viewCount}</span>
                </section>
            </section>
        </article>
    );
}