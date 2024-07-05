import React from "react";
import { GAME_SORT_MENU } from "../../constants/Game";

export const GameSortMenu = ({ sortMenu, setSortMenu, className }) => {
  const onMenuClick = (menu) => {
    setSortMenu(menu);
  };

  return (
    <div className={"flex mb-10 justify-center gap-3 mobile:gap-2"}>
      {GAME_SORT_MENU.map((menu) => (
        <MenuItem
          key={menu.value}
          menu={menu}
          sortMenu={sortMenu}
          onMenuClick={onMenuClick}
        />
      ))}
    </div>
  );
};

const MenuItem = ({ menu, sortMenu, onMenuClick }) => {
  return (
    <button
      onClick={() => onMenuClick(menu)}
      className={
        "text-gray-600 w-24 mobile:w-20 px-2 mobile:px-2 py-3 mobile:py-2 text-center bg-gray-100 rounded-full hover:bg-primary-100 text-nowrap" +
        " " +
        (menu.value === sortMenu.value
          ? "bg-primary-600 text-white font-bold"
          : "")
      }
    >
      {menu.name}
    </button>
  );
};

export default GameSortMenu;
