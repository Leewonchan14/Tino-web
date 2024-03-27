import React, {useEffect, useRef, useState} from 'react';
import viewcount_icon from "../assets/viewcount_icon.png";
import {useNavigate} from "react-router-dom";
import SortMenuList from "./SortMenuList";

export function GameCompList({gameState, ...rest}) {
    return (
        <>
            <div className={"flex justify-end"}>
                <SortMenuList/>
            </div>
            <div className={"grid grid-cols-3 gap-6 w-full"}>
                {gameState.games.map((game, index) => {
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
        <div className={"rounded-2xl cursor-pointer relative bg-gray-50 overflow-hidden"}>
            <div className={"w-full"}>
                <img className={"bg-gray-100 h-72 w-full object-cover"}
                     src="https://pbs.twimg.com/media/EA9UJBjU4AAdkCm.jpg" alt=""/>
            </div>
            <div className={"p-6"}>
                <h1 className={"text-2xl"} style={{fontFamily: "GmarketSans"}}>숫자 맞추기</h1>
                <div className={"mt-2 text-gray-600"}>
                    <span>0~100까지 사이의 랜덤숫자를 맞추는 게임</span>
                    <div className={"mt-6 flex"}>
                        <div className={"w-6 justify-center items-center flex"}>
                            <img src={viewcount_icon} alt=""/>
                        </div>
                        <span className={"ml-4"}>2150</span>
                    </div>
                </div>
            </div>
        </div>
    );
}