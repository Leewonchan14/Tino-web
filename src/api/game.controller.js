import {Api} from "./common.controller";

const GAME_SORT = {
    VIEW_COUNT: "VIEW_COUNT",
    LOG_COUNT: "LOG_COUNT",
    RECENT: "RECENT",
    REVIEW_COUNT: "REVIEW_COUNT",
}


class game_controller extends Api {

    // 게임 페이징 조회
    findAll = async ({page, size, sort}) => {
        return await this.get(`/games?page=${page}&size=${size}&sort=${sort}`);
    };

    findOneGame = async ({gameId}) => {
        return await this.get(`/game/${gameId}`);
    }


    // //일기 작성
    // writeDiary = async (diaryData) => {
    //     return await this.post("/diary/write", {data: diaryData});
    // };
    // //일기 수정
    // updateDiary = async (diaryData) => {
    //     return await this.patch("/diary/update", {data: diaryData});
    // };
    // //일기회상 퀴즈
    // getQuiz = async ({diaryId}) => {
    //     return await this.get(`/diary/quiz?diaryId=${diaryId}`);
    // };
}

const GameController = new game_controller()

export {GameController, GAME_SORT};
