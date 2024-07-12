import { Api } from "./common.controller";

class UserController extends Api {
  // 회원 가입
  signUp = async ({ email, password, nickname, major, code }) => {
    return await this.post("/user", {
      data: {
        email,
        password,
        nickname,
        major,
        code,
      },
    });
  };

  // 로그인
  login = async ({ email, password }) => {
    return await this.post("/user/login", {
      data: {
        email,
        password,
      },
    });
  };

  // userId 로 user 조회
  findUserById = async (userId) => {
    return await this.get(`/user/${userId}`);
  };

  // auto login
  autoLogin = async ({ userId, accessToken, refreshToken }) => {
    return await this.get(`/users/${userId}/auto/login`, {
      data: {
        headers: {
          accessToken,
          refreshToken,
          "Content-Type": "application/json",
        },
      },
    });
  };
}

export default new UserController();
