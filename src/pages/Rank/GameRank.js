import GameSortMenu from "../../components/game/GameSortMenu";
import React, {useState} from "react";
import GameList from "../../components/game/GameList";

export const GAME_RANK_PATH = "/rank/game";

const GameRank = () => {

    const [sortState, setSortState] = useState();

    return (
        <>
            <GameSortMenu setSortState={setSortState} className={""} initScroll={() => {
            }}/>

            <GameList />
        </>
    );
}

export default GameRank;