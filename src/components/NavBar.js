import React from 'react';
import TinoIcon from "../assets/tino_icon.png";
import {useNavigate} from "react-router-dom";

function MenuBar({...rest}) {
    const MenuButton = ({menu,  ...rest}) => {
        return (
            <div
                className="cursor-pointer">
                {menu}
            </div>
        );
    }

    return (
        <div className="flex justify-evenly items-center gap-2 py-2 w-48 rounded-full shadow-gray-400 shadow-2xl
        box-border border-[1px] border-gray-200 ">
            <MenuButton menu={"게임"}/>
            <MenuButton menu={"랭킹"}/>
            <MenuButton menu={"메뉴"}/>
        </div>
    );
}

function NavBar({...rest}) {
    let navigate = useNavigate();

    const onLogin = () => {
        navigate("/login");
    }
    const goHome = () => {
        navigate("/");
    }

    return (
        <div className={"h-28 flex py-4 items-center relative"}>
            {/* 홈 아이콘 (tino) */}
            <div onClick={goHome} className={"rounded-full bg-white h-full mr-4 " +
                "shadow-lg shadow-gray-300 z-10 cursor-pointer"}>
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