import {Api} from "./common.controller";

class LogController extends Api {

    // 로그 페이징 조회
    findLogsByGameId = async ({gameId, page, size}) => {
        return await this.get(`/logs/game/${gameId}?page=${page}&size=${size}`);
    };

    // 자신의 최고 기록 조회
    findBestLogByGameId = async ({gameId, userId}) => {
        return await this.get(`/log/game/${gameId}/user/${userId}/`);
    };
}

export default new LogController();
