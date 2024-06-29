import {Api} from "./common.controller";

class RankController extends Api {

    // 게임 랭킹 조회
    findGameRank = async ({page, size, sort}) => {
        return await this.get(`/games?page=${page}&size=${size}&sort=${sort}`);
    };

    // 유저 랭킹 조회
    findUserRank = async ({page, size}) => {
        return await this.get(`/rank/users?page=${page}&size=${size}`);
    }

    // 학과별 랭킹 조회
    findDepartmentRank = async () => {
        return await this.get(`/major`);
    }

    // 학과 내 랭킹 조회
    findInDepartmentRank = async ({page, size, major}) => {
        return await this.get(`/rank/major?page=${page}&size=${size}&major=${major}`);
    }
}

export default new RankController();