import React from "react";

const GameIframe = ({ gameState, isFetching }) => {
  return (
    <div
      className={
        "w-full overflow-clip h-[85vh] rounded-3xl flex justify-center items-center relative border-2"
      }
    >
      <span className={"absolute top-1/2 z-0"}>
        {isFetching && "게임을 기다리는중..."}
      </span>
      {!isFetching && (
        <iframe
          className={"w-full h-full z-30"}
          src={gameState.gameUrl}
          title={gameState.gameName}
        />
      )}
    </div>
  );
};

export default GameIframe;
