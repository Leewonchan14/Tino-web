import React from "react";
import { userStore } from "../../stores/userStore";

const GameIframe = ({ gameState, isFetching }) => {
  let { userId } = userStore((state) => state);
  return (
    <div
      className={
        "w-full overflow-clip h-[800px] rounded-3xl flex justify-center items-center relative border-2"
      }
    >
      <span className={"absolute top-1/2 z-0"}>
        {isFetching && "게임을 기다리는중..."}
      </span>
      {!isFetching && (
        <iframe
          className={"w-full h-full z-30"}
          src={`${gameState.gameUrl}?userId=${userId}`}
          title={gameState.gameName}
        />
      )}
    </div>
  );
};

export default GameIframe;
