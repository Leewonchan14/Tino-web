import {Api} from "./common.controller";

class LogController extends Api {

    // 로그 페이징 조회
    findLogsByGameId = async ({gameId, page, size}) => {
        return await this.get(`/logs/game/${gameId}?page=${page}&size=${size}`);
    };
}

export default new LogController();
