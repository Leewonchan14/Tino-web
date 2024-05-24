import React, {useState} from "react";
import GameRankList from "../../components/ranking/GameRankList";
import ComboBox from "../../components/common/input/ComboBox";
import {GAME_SORT_MENU} from "../../constants/Game";

export const GAME_RANK_PATH = "/rank/game";

const GameRankOption = ({select, onChange}) => {
    return (
        <ComboBox options={GAME_SORT_MENU} value={select.value} onChange={onChange}
                  className={"!w-[30%] !mx-auto !block !my-6"}/>
        // <GameSortMenu sortMenu={select} setSortMenu={onChange} className={"!my-6"}/>
    );
}

const GameRank = () => {

    const [sortMenu, setSortMenu] = useState(GAME_SORT_MENU[0]);
    const onChangeOption = (e) => {
        setSortMenu(GAME_SORT_MENU.find((sortMenu) => sortMenu.value === e.target.value));
    }

    return (
        <>
            <GameRankOption select={sortMenu} onChange={onChangeOption}/>
            <GameRankList sortMenu={sortMenu}/>
        </>
    );
}

export default GameRank;