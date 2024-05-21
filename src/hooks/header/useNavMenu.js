import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {HOME_PATH} from "../../pages/Home";
import {FRIEND_PAGE_PATH} from "../../pages/Friend";
import {RANKING_PATH} from "../../pages/Ranking";
import {GAME_RANK_PATH} from "../../pages/Rank/GameRank";

const MENU_LIST = [
    {
        name: "게임",
        path: HOME_PATH,
        prevPath: HOME_PATH
    },
    {
        name: "랭킹",
        path: GAME_RANK_PATH,
        prevPath: RANKING_PATH
    },
    {
        name: "친구",
        path: FRIEND_PAGE_PATH,
        prevPath: FRIEND_PAGE_PATH
    }
]

const getNowMenu = (path) => {
    return MENU_LIST.find(item => {
        if (item.path === HOME_PATH) {
            return path === HOME_PATH;
        }
        return path.startsWith(item.prevPath)
    });
}

const useNavMenu = () => {
    // 현재 url path
    const location = useLocation();
    let navigate = useNavigate();

    const [menuState, setMenuState] = useState(getNowMenu(location.pathname));

    useEffect(() => {
        setMenuState(getNowMenu(location.pathname));
    }, [location.pathname]);

    const onClickMenu = (e) => {
        let findMenu =
            MENU_LIST.find(item => item.name === e.target.innerText);
        navigate(findMenu.path);
    }

    return {menuState, setMenuState, onClickMenu};
};

export {useNavMenu, MENU_LIST};