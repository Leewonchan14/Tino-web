import {Api} from "./common.controller";

class GameController extends Api {

    SORT = {
        VIEW_COUNT: "VIEW_COUNT",
        LOG_COUNT: "LOG_COUNT",
        RECENT: "RECENT",
        REVIEW_COUNT: "REVIEW_COUNT",
    }

    // 게임 페이징 조회
    findAll = async ({page, size, sort}) => {
        return await this.get(`/games?page=${page}&size=${size}&sort=${sort}`);
    };


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

export default new GameController();
