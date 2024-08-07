import { Api } from "./common.controller";

const COMMENT_SORT = {
  RECENT: "RECENT",
  POPULAR: "POPULAR",
  OLDEST: "OLDEST",
  HELPFUL: "HELPFUL",
};

class comment_controller extends Api {
  // 댓글 요청
  findAll = async ({ gameId, sort, page, size }) => {
    return await this.get(
      `/review/game/${gameId}?page=${page}&size=${size}&sort=${sort}`
    );
  };

  // 자기 자신 댓글 조회
  findCommentByUserId = async ({ gameId, userId }) => {
    return await this.get(`/review/game/${gameId}/user/${userId}`);
  };

  // 댓글 작성
  createComment = async ({ userId, gameId, reviewContent, star }) => {
    return await this.post(`/review`, {
      userId,
      gameId,
      reviewContent,
      star,
    });
  };

  // 댓글 수정
  updateComment = async ({ reviewId, reviewContent, star }) => {
    return await this.put(`/review/${reviewId}`, {
      reviewContent,
      star,
    });
  };
}

const CommentController = new comment_controller();

export { CommentController, COMMENT_SORT };
