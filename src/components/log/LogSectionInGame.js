import OwnLog from "./OwnLog";
import React from "react";
import LogList from "./LogList";

const LogSectionInGame = ({gameId, userId}) => {
    return (
        <>
            <h2 className={"mt-10 text-3xl mb-4"}>Top 10</h2>

            <section className={"border-2 w-full h-80 rounded-3xl mb-4 flex"}>
                <OwnLog gameId={gameId} userId={userId}/>
                <LogList gameId={gameId}/>
            </section>
        </>
    )
}

export default LogSectionInGame;