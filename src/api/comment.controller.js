import {Api} from "./common.controller";

const COMMENT_SORT = {
    RECENT: "RECENT",
    POPULAR: "POPULAR",
    OLDEST: "OLDEST",
    HELPFUL: "HELPFUL",
}

class comment_controller extends Api {

    // 댓글 요청
    findAll = async ({gameId, sort}) => {
        return await this.get(`/review/game/${gameId}?page=0&size=10&sort=${sort}`);
    };

}

const CommentController = new comment_controller()

export {CommentController, COMMENT_SORT};