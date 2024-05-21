import React from 'react';
import {useParams} from 'react-router-dom';
import {useGetOneGame} from "../hooks/game/useGetOneGame";
import LogListCompInGame from "../components/log/LogListCompInGame";
import CommentList from "../components/comment/CommentList";
import GameDescriptionComp from "../components/game/page/GameDescriptionComp";
import GameIframeComp from "../components/game/page/GameIframeComp";

const GAME_PATH = "/games/:gameId";

function Game(props) {
    let {gameId} = useParams();
    let {gameState, isFetching} = useGetOneGame({gameId});
    return (
        <div className={"pb-20"}>
            {/*게임 화면*/}
            <GameIframeComp gameState={gameState} isFetching={isFetching}/>

            {/*게임 설명*/}
            <GameDescriptionComp gameState={gameState} isFetching={isFetching}/>

            {/*게임 기록*/}
            <LogListCompInGame gameId={gameId} userId={112}/>

            {/*댓글 목록*/}
            <CommentList/>
        </div>
    );
}

export {
    Game, GAME_PATH
};