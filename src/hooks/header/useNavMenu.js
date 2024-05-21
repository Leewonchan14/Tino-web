import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {HOME_PATH} from "../../pages/Home";
import {RANKING_PATH} from "../../pages/Ranking";
import {FRIEND_PAGE_PATH} from "../../pages/FriendPage";

const menuList = [
    "게임",
    "랭킹",
    "친구",
];

const menuPath = {
    [menuList[0]]: HOME_PATH,
    [menuList[1]]: RANKING_PATH,
    [menuList[2]]: FRIEND_PAGE_PATH,
};

const useNavMenu = () => {
    // 현재 url path
    const location = useLocation();
    let navigate = useNavigate();

    const [menuState, setMenuState] = useState(menuList[0]);

    useEffect(() => {
        // url이 HOME_PATH일 때
        if (location.pathname === HOME_PATH) {
            setMenuState(menuList[0]);
        }

        if (location.pathname === RANKING_PATH) {
            setMenuState(menuList[1]);
        }

        if (location.pathname === FRIEND_PAGE_PATH) {
            setMenuState(menuList[2]);
        }
    }, [location]);

    const onClickMenu = (e) => {
        let v = e.target.textContent;

        setMenuState(v);
        navigate(menuPath[v]);
    }

    return {menuState, setMenuState, onClickMenu};
};

export {useNavMenu, menuList};