import React from 'react';
import {useParams} from 'react-router-dom';
import {useGetOneGame} from "../hooks/game/useGetOneGame";
import LogListCompInGame from "../components/log/LogListCompInGame";
import CommentList from "../components/comment/CommentList";
import GameDescription from "../components/game/GameDescription";
import GameIframe from "../components/game/GameIframe";

const GAME_PATH = "/games/:gameId";
const GAME_PATH_WITHOUT_PARAM = "/games/";

function Game(props) {
    let {gameId} = useParams();
    let {gameState, isFetching} = useGetOneGame({gameId});
    return (
        <div className={"pb-20"}>
            {/*게임 화면*/}
            <GameIframe gameState={gameState} isFetching={isFetching}/>

            {/*게임 설명*/}
            <GameDescription gameState={gameState} isFetching={isFetching}/>

            {/*게임 기록*/}
            <LogListCompInGame gameId={gameId} userId={112}/>

            {/*댓글 목록*/}
            <CommentList/>
        </div>
    );
}

export {
    Game, GAME_PATH, GAME_PATH_WITHOUT_PARAM
};