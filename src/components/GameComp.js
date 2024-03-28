import React, {useEffect, useRef, useState} from 'react';
import viewcount_icon from "../assets/viewcount_icon.png";
import {useNavigate} from "react-router-dom";
import SortMenuList from "./SortMenuList";
import GameController from "../api/game.controller";

export function GameCompList({...rest}) {
    const [gameState, setGameState] = useState([])

    const findAllGame = async () => {
        const response = await GameController.findAll({
            page: 0,
            size: 10,
            sort: GameController.SORT.VIEW_COUNT
        });
        setGameState(response.data)
    }


    useEffect(() => {
        findAllGame();
    }, []);

    return (
        <>
            <h1 className={"text-2xl font-bold"}>전체 게임
                <span className={"text-blue-600"}> {gameState.length} 개</span>
            </h1>
            <div className={"flex justify-end"}>
                <SortMenuList/>
            </div>
            <div className={"grid grid-cols-3 gap-6 w-full"}>
                {gameState.map((game, index) => {
                    return <GameComp key={index} game={game}/>
                })}
            </div>
        </>
    );
}

export function GameComp({game}) {
    let navigate = useNavigate();

    const onClick = () => {
        navigate(`/games/${game.gameId}`);
    }

    return (
        <div onClick={onClick}
             className={"border-2 border-gray-100 relative overflow-clip w-full rounded-2xl cursor-pointer bg-gray-50 flex-col"}>
            <div className={"h-44 w-full"}>
                <img className={"bg-gray-100 h-full w-full object-cover"}
                     src={game.gameImage} alt=""/>
            </div>
            <div className={"h-40 p-6 w-full flex-col flex"}>
                <h1 className={"text-xl"} style={{fontFamily: "GmarketSans"}}>
                    {game.gameName}
                </h1>
                <div className={"w-full mt-2 text-gray-600 flex-col flex"}>
                    <div className={"line-clamp-2"}>{game.description}</div>
                </div>
                <div className={"mt-auto flex"}>
                    <div className={"w-6 justify-center items-center flex"}>
                        <img src={viewcount_icon} alt=""/>
                    </div>
                    <span className={"ml-4"}>{game.viewCount}</span>
                </div>
            </div>
        </div>
    );
}