import React from "react";

const MenuItem = ({option, handleOptionClick}) => {
    return (
        <button
            onClick={() => handleOptionClick(option)}
            className="text-gray-700 block w-full px-4 py-2 text-sm text-left hover:bg-blue-500 hover:text-white">
            {option}
        </button>
    );
}

const GameSortMenuItemList = ({handleOptionClick, options}) => {
    return (
        <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white">
            <div className="py-1">
                {options.map((option) => (
                    <MenuItem key={option} option={option} handleOptionClick={handleOptionClick}/>
                ))}
            </div>
        </div>
    );
}

export default GameSortMenuItemList;