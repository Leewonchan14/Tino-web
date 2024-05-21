import React, {useState} from 'react';
import {G_MARKET_FONT} from "../constant/FontFamily";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {GAME_RANK_PATH} from "./Rank/GameRank";
import {USER_RANK_PATH} from "./Rank/UserRank";
import {DEPARTMENTS_PATH} from "./Rank/Departments";
import {IN_DEPARTMENT_PATH} from "./Rank/InDepartment";

export const RANKING_PATH = "/rank";

const RANKING_MENU_LIST = [
    {
        name: "게임 랭킹",
        path: GAME_RANK_PATH
    },
    {
        name: "유저 랭킹",
        path: USER_RANK_PATH
    },
    {
        name: "학과별 랭킹",
        path: DEPARTMENTS_PATH
    },
    {
        name: "학과내 랭킹",
        path: IN_DEPARTMENT_PATH
    }
]

const SELECT_COLOR = "bg-blue-500 text-white";

const Ranking = ({...rest}) => {

    let location = useLocation();

    let findMenu =
        RANKING_MENU_LIST.find(item => (
            item.path === location.pathname
        ));

    const [selectedMenu, setSelectedMenu] = useState(findMenu);

    let navigate = useNavigate();

    const onClickMenu = (e) => {
        let findMenu =
            RANKING_MENU_LIST.find(item => (
                item.name === e.target.innerText
            ));
        setSelectedMenu(findMenu);
        navigate(findMenu.path);
    }

    return (
        <>
            <div className={"flex mb-4"}>
                {RANKING_MENU_LIST.map((item, index) => (
                    <span style={{fontFamily: G_MARKET_FONT}} key={index} onClick={onClickMenu}
                          className={"flex flex-1 justify-center cursor-pointer border-2 rounded text-xl "
                              + ((selectedMenu === item) && SELECT_COLOR)}>
                        {item.name}
                    </span>
                ))}
            </div>
            <Outlet/>
        </>
    );
}

export {Ranking};