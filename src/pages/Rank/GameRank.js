import GameSortMenu from "../../components/game/GameSortMenu";
import React, {useState} from "react";
import GameList from "../../components/game/GameList";
import {GAME_SORT_MENU} from "../../api/game.controller";

export const GAME_RANK_PATH = "/rank/game";

const GameRank = () => {

    const [sortMenu, setSortMenu] = useState(GAME_SORT_MENU[0]);

    return (
        <>
            <GameSortMenu sortMenu={sortMenu} setSortMenu={setSortMenu} className={""}/>

            <GameList/>
        </>
    );
}

export default GameRank;