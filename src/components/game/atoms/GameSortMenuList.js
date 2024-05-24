import React from "react";
import {GAME_SORT_MENU} from "../../../constants/Game";

const MenuItem = ({menu, onSortOptionClick}) => {
    return (
        <button
            onClick={() => onSortOptionClick(menu)}
            className="text-gray-700 block w-full px-4 py-2 text-sm text-left hover:bg-blue-500 hover:text-white">
            {menu.name}
        </button>
    );
}

const GameSortMenuList = ({onSortOptionClick}) => {
    return (
        <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white">
            <div className="py-1">
                {GAME_SORT_MENU.map((menu) => (
                    <MenuItem key={menu.value} menu={menu} onSortOptionClick={onSortOptionClick}/>
                ))}
            </div>
        </div>
    );
}

export default GameSortMenuList;