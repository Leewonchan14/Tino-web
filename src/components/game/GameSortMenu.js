import React, {useEffect, useRef, useState} from "react";
import arrow_drop_down from "../../assets/arrow_drop_down.png";
import GameSortMenuItemList from "./atoms/GameSortMenuItemList";

const GameSortMenu = ({sortMenu, setSortMenu, className}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleButton = useRef();

    useEffect(() => {
        setSortMenu(sortMenu);
    }, [sortMenu]);

    // 만약 다른 곳을 눌렀다면 닫히게 하기
    useEffect(() => {
        window.addEventListener('click', (e) => {
            if (toggleButton.current && !toggleButton.current.contains(e.target)) {
                setIsOpen(false);
            }
        });
    }, []);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const onSortOptionClick = (menu) => {
        setSortMenu(menu)
        setIsOpen(false);
    };

    return (
        <div ref={toggleButton} className={"relative inline-block text-left mb-12 z-10 " + className}>
            <button
                onClick={toggleDropdown}
                className="inline-flex w-40 justify-between rounded-md border border-gray-300 bg-white px-4 py-2 shadow-sm h-10">
                {sortMenu.name}
                <div className={"flex justify-center items-center h-full"}>
                    <img src={arrow_drop_down} alt="arrow_drop_down" className="w-4"/>
                </div>
            </button>
            {isOpen && (
                <GameSortMenuItemList onSortOptionClick={onSortOptionClick}/>
            )}
        </div>
    );
}

export default GameSortMenu;