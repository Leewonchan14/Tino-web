import {GAME_RANK_PATH} from "../pages/Rank/GameRank";
import {USER_RANK_PATH} from "../pages/Rank/UserRank";
import {DEPARTMENTS_PATH} from "../pages/Rank/Departments";
import {IN_DEPARTMENT_PATH} from "../pages/Rank/InDepartment";

export const RANKING_MENU_LIST = [
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