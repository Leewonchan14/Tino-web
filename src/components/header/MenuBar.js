import {MENU_LIST, useNavMenu} from "../../hooks/header/useNavMenu";
import React from "react";
import MenuButton from "./MenuButton";

function MenuBar({...rest}) {

    let {menuState, onClickMenu} = useNavMenu();

    return (
        <div className={"absolute flex-1 flex justify-center items-center w-full h-full"}>
            <div className="flex items-center h-12 w-56 rounded-full shadow-gray-400 shadow-2xl
        box-border border-[1px] border-gray-200 ">
                {MENU_LIST.map((item, index) => (
                    <MenuButton key={index} menu={item} menuState={menuState}
                                onClick={onClickMenu}/>
                ))}
            </div>
        </div>
    );
}

export default MenuBar;