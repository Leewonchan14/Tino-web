import { MENU_LIST, useNavMenu } from "../../hooks/header/useNavMenu";
import React from "react";
import MenuButton from "./MenuButton";

function MenuBar({ ...rest }) {
  let { menuState, onClickMenu } = useNavMenu();

  return (
    <div className={"w-full absolute"}>
      <div
        className="mx-auto flex items-center h-12 w-56 rounded-full bg-white shadow-lg shadow-gray-300
        box-border border-[1px] mobile:w-36"
      >
        {MENU_LIST.map((item, index) => (
          <MenuButton
            key={index}
            menu={item}
            menuState={menuState}
            onClickMenu={onClickMenu}
          />
        ))}
      </div>
    </div>
  );
}

export default MenuBar;
