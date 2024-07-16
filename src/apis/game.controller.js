import { Api } from "./common.controller";

class GameController extends Api {
  // 게임 페이징 조회
  findAll = async ({ page, size, sort }) => {
    return await this.get(
      `/games?page=${page}&size=${size}&sort=${sort}`
    );
  };

  findOneGame = async ({ gameId }) => {
    return await this.get(`/game/${gameId}`);
  };

  findRecentUserGame = async ({ userId, page, size }) => {
    return await this.get(
      `/game/user/${userId}?page=${page}&size=${size}`
    );
  };
}

export default new GameController();
