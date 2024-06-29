import React from "react";

const MenuButton = ({menu, index, menuState, onClickMenu, ...rest}) => {
    return (
        <div onClick={() => onClickMenu(menu)}
             className={"cursor-pointer h-full flex-1 flex justify-center items-center overflow-hidden rounded-full"
                 + (menuState === menu && " text-white bg-primary-600")}>
            {menu.name}
        </div>
    );
}

export default MenuButton;