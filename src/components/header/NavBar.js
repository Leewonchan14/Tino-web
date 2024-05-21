import React from 'react';
import TinoIcon from "../../assets/tino_icon.png";
import {useNavigate} from "react-router-dom";
import {HOME_PATH} from "../../pages/Home";
import {LOGIN_PATH} from "../../pages/Login";
import MenuBar from "./MenuBar";

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
            <picture onClick={goHome} className={"block rounded-full bg-white h-full mr-4 " +
                "shadow-lg shadow-gray-300 z-10 cursor-pointer "}>
                <img draggable={false} src={TinoIcon} alt={"logo"} className={"w-20 object-cover"}/>
            </picture>
            {/* 게임, 랭킹, 메뉴 버튼 */}
            <MenuBar />

            {/* size box */}
            <div className={"flex-1"}></div>
            {/* 로그인 버튼 */}
            <div onClick={onLogin} className={"cursor-pointer z-0"}>로그인</div>
        </div>
    );
}

export default NavBar;