import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {RANKING_MENU_LIST} from "../../constants/Rank";

const useRankingMenu = () => {
    const [selectedMenu, setSelectedMenu] = useState();

    let location = useLocation();

    let navigate = useNavigate();

    useEffect(() => {
        setSelectedMenu(RANKING_MENU_LIST.find(item => location.pathname === item.path));
    }, [location.pathname]);

    const onClickMenu = ({menu}) => {
        setSelectedMenu(menu);
        navigate(menu.path);
    }

    return {selectedMenu, onClickMenu};
}

export default useRankingMenu;