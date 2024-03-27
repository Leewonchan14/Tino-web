import React, {useEffect, useRef, useState} from "react";
import arrow_drop_down from "../assets/arrow_drop_down.png";

const MenuItem = ({option, handleOptionClick}) => {
    return (
        <button
            onClick={() => handleOptionClick(option)}
            className="text-gray-700 block w-full px-4 py-2 text-sm text-left hover:bg-blue-500 hover:text-white">
            {option}
        </button>
    );
}

const MenuItems = ({handleOptionClick, options}) => {
    return (
        <div className=" absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white">
            <div className="py-1">
                {options.map((option) => (
                    <MenuItem key={option} option={option} handleOptionClick={handleOptionClick}/>
                ))}
            </div>
        </div>
    );
}

const SortMenuList = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const options = ['조회순', '최신순', '댓글순', '추천순'];
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const toggleButton = useRef();


    // 만약 다른 곳을 눌렀다면 닫히게 하기
    useEffect(() => {
        window.addEventListener('click', (e) => {
            if (toggleButton.current && !toggleButton.current.contains(e.target)) {
                setIsOpen(false);
            }
        });
    }, []);


    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div ref={toggleButton} className="relative inline-block text-left mb-12 z-10">
            <button
                onClick={toggleDropdown}
                className="inline-flex w-40 justify-between rounded-md border border-gray-300 bg-white px-4 py-2 shadow-sm h-10">
                {selectedOption}
                <div className={"flex justify-center items-center h-full"}>
                    <img src={arrow_drop_down} alt="arrow_drop_down" className="w-4"/>
                </div>
            </button>
            {isOpen && (
                <MenuItems handleOptionClick={handleOptionClick} options={options}/>
            )}
        </div>
    );
}

export default SortMenuList;