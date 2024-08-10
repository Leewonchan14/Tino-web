import React from "react";
import { useParams } from "react-router-dom";
import { useGetOneGame } from "../hooks/game/useGetOneGame";
import GameDescription from "../components/game/GameDescription";
import GameIframe from "../components/game/GameIframe";
import LogSectionInGame from "../components/log/LogSectionInGame";
import CommentSectionInGame from "../components/comment/CommentSectionInGame";

const GAME_PATH = "/games/:gameId";
const GAME_PATH_WITHOUT_PARAM = "/games/";

function GameDetailPage(props) {
  let { gameId } = useParams();
  let { gameState, isFetching } = useGetOneGame({ gameId });

  return (
    <div className={"w-full pb-20"}>
      {/*게임 화면*/}
      <GameIframe gameState={gameState} isFetching={isFetching} />

      {/*게임 설명*/}
      <GameDescription
        gameState={gameState}
        isFetching={isFetching}
      />

      {/*게임 기록*/}
      <LogSectionInGame gameId={gameId} />

      {/*댓글 목록*/}
      <CommentSectionInGame gameId={gameId} />
    </div>
  );
}

export { GameDetailPage, GAME_PATH, GAME_PATH_WITHOUT_PARAM };
