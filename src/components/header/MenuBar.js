import {MENU_LIST, useNavMenu} from "../../hooks/header/useNavMenu";
import React from "react";
import MenuButton from "./MenuButton";

function MenuBar({...rest}) {

    let {menuState, onClickMenu} = useNavMenu();

    return (
        <div className="flex items-center h-12 w-56 rounded-full shadow-gray-400 shadow-2xl
        box-border border-[1px] border-gray-200 sm:w-36">
            {MENU_LIST.map((item, index) => (
                <MenuButton key={index} menu={item} menuState={menuState}
                            onClickMenu={onClickMenu}/>
            ))}
        </div>
    );
}

export default MenuBar;