import {Api} from "./common.controller";

export const GAME_SORT_MENU = [
    {name: '조회순', value: "VIEW_COUNT", text: "조회순"},
    {name: '인기순', value: "LOG_COUNT", text: "인기순"},
    {name: '댓글순', value: "RECENT", text: "댓글순"},
    {name: '최신순', value: "REVIEW_COUNT", text: "최신순"},
]


class GameController extends Api {

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

export default new GameController();