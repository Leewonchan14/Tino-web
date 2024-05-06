import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useGetOneGame} from "../hooks/useGetOneGame";
import {LogComp} from "../components/LogComp";
import {CommentListComp} from "../components/CommentListComp";
import {GameDescriptionComp} from "../components/GameDescriptionComp";
import {GameController} from "../api/game.controller";

const GAME_PATH = "/games/:gameId";

const GameIframeComp = ({gameState, isFetching}) => {
    return (
        <div className={"w-full h-[80vh] rounded-3xl flex justify-center items-center relative border-2"}>
            <span className={"absolute top-1/2 z-0"}>{isFetching && "게임을 기다리는중..."}</span>
            <iframe className={"w-full h-full z-30"} src={gameState.gameUrl} title={gameState.gameName}/>
        </div>
    )
}


function GameDetailPage(props) {
    let {gameId} = useParams();
    let {gameState, isFetching} = useGetOneGame({gameId});
    return (
        <div className={"px-14 pb-20"}>
            {/*게임 화면*/}
            <GameIframeComp gameState={gameState} isFetching={isFetching}/>

            {/*게임 설명*/}
            <GameDescriptionComp gameState={gameState} isFetching={isFetching}/>

            {/*게임 기록*/}
            <LogComp gameId={gameId} userId={112}/>

            {/*댓글 목록*/}
            <CommentListComp/>
        </div>
    );
}

export {
    GameDetailPage, GAME_PATH
};