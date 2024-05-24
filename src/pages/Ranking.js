import React from 'react';
import {G_MARKET_FONT} from "../constants/FontFamily";
import {Outlet} from "react-router-dom";
import useRankingMenu from "../hooks/ranking/useRankingMenu";
import {RANKING_MENU_LIST} from "../constants/Rank";

export const RANKING_PATH = "/rank";

const SELECT_COLOR = "bg-blue-500 text-white";

const RankingMenuItem = ({menu, onClickMenu, selectedMenu}) => {
    return (
        <span style={{fontFamily: G_MARKET_FONT}} key={menu.name} onClick={onClickMenu}
              className={"flex flex-1 justify-center cursor-pointer border-2 rounded text-xl sm:text-sm "
                  + ((selectedMenu === menu) && SELECT_COLOR)}>
            {menu.name}
        </span>
    )
}

const RakingMenu = () => {

    let {onClickMenu, selectedMenu} = useRankingMenu();

    return (
        <div className={"flex mt-16 mb-4"}>
            {RANKING_MENU_LIST.map((menu, index) => (
                <RankingMenuItem key={index} menu={menu} onClickMenu={() => onClickMenu({menu})}
                                 selectedMenu={selectedMenu}/>
            ))}
        </div>
    )
}

const Ranking = ({...rest}) => {

    return (
        <>
            <RakingMenu/>
            <Outlet/>
        </>
    );
}

export {Ranking};