import OwnLog from "./OwnLog";
import React from "react";
import LogList from "./LogList";

const LogSectionInGame = ({ gameId }) => {
  return (
    <>
      <h2 className={"mt-10 text-3xl mb-4"}>게임 기록</h2>

      <section
        className={
          "border-2 overflow-clip w-full h-80 rounded-3xl mb-4 flex mobile:flex-col"
        }
      >
        <OwnLog gameId={gameId} />
        <LogList gameId={gameId} />
      </section>
    </>
  );
};

export default LogSectionInGame;
