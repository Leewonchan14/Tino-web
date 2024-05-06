import React from 'react';
import TinoIcon from "../assets/tino_icon.png";
import {useNavigate} from "react-router-dom";
import {HOME_PATH} from "../pages/Home";
import {LOGIN_PATH} from "../pages/Login";
import {menuList, useNavMenu} from "../hooks/useNavMenu";

function MenuBar({...rest}) {

    let {menuState, onClickMenu} = useNavMenu();

    const MenuButton = ({menu, ...rest}) => {
        return (
            <div onClick={onClickMenu}
                 className={"cursor-pointer h-full flex-1 flex justify-center items-center overflow-hidden rounded-full"
                     + (menuState === menu ? " text-white bg-blue-600" : " ")}>
                {menu}
            </div>
        );
    }

    return (
        <div className="flex items-center h-12 w-56 rounded-full shadow-gray-400 shadow-2xl
        box-border border-[1px] border-gray-200 ">
            {menuList.map((item, index) => {
                return <MenuButton key={index} menu={item}/>
            })}
        </div>
    );
}

function NavBar({...rest}) {
    let navigate = useNavigate();

    const onLogin = () => {
        navigate(LOGIN_PATH);
    }
    const goHome = () => {
        navigate(HOME_PATH);
    }

    return (
        <div className={"h-28 flex py-4 mb-6 items-center relative"}>
            <div onClick={goHome} className={"rounded-full bg-white h-full mr-4 " +
                "shadow-lg shadow-gray-300 z-10 cursor-pointer "}>
                <img src={TinoIcon} alt={"logo"} className={"w-20 object-cover"}/>
            </div>
            {/* 게임, 랭킹, 메뉴 버튼 */}
            <div className={"absolute flex-1 flex justify-center items-center w-full h-full"}>
                <MenuBar/>
            </div>

            {/* size box */}
            <div className={"flex-1"}></div>
            {/* 로그인 버튼 */}
            <div onClick={onLogin} className={"cursor-pointer z-0"}>로그인</div>
        </div>
    );
}

export default NavBar;