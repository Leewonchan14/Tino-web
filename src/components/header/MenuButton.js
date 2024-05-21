import React from "react";

const MenuButton = ({menu, index, menuState, onClick, ...rest}) => {
    return (
        <div onClick={onClick}
             className={"cursor-pointer h-full flex-1 flex justify-center items-center overflow-hidden rounded-full"
                 + ((menuState.name === menu.name) && " text-white bg-blue-600")}>
            {menu.name}
        </div>
    );
}

export default MenuButton;