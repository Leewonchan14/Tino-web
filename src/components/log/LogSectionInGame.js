import OwnLog from "./OwnLog";
import React from "react";
import LogList from "./LogList";
import RefreshIcon from "../../assets/refresh_icon.png";
import { useQueryClient } from "@tanstack/react-query";

const LogSectionInGame = ({ gameId }) => {
  let queryClient = useQueryClient();
  return (
    <>
      <div className={"flex text-3xl mb-4 mt-10 items-center"}>
        <div className={"mr-4"}>게임 기록</div>
        <img
          onClick={async () => {
            await queryClient.resetQueries({
              queryKey: ["logs", { gameId }],
            });
          }}
          className={"w-8 cursor-pointer"}
          src={RefreshIcon}
        />
      </div>

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
