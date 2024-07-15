import { Api } from "./common.controller";
import { USER_OBJECT_KEY } from "../utils/userConverter";

class UserController extends Api {
  // 회원 가입
  signUp = async ({ email, password, nickname, major, code }) => {
    return await this.post("/user", {
      email,
      password,
      nickname,
      major,
      code,
    });
  };

  // 로그인
  login = async ({ email, password }) => {
    // return Promise.resolve({
    //   data: {
    //     userId: 1,
    //     token: {
    //       accessToken: "abc",
    //       refreshToken: "abc",
    //     },
    //   },
    // });

    return await this.post("/user/login", {
      email,
      password,
    });
  };

  // userId 로 user 조회
  findUserById = async (userId) => {
    // return Promise.resolve({
    //   data: {
    //     profileImageURL: TinoIcon,
    //     nickname: "티노",
    //     email: "twoone14@tukorea.ac.kr",
    //     major: "컴퓨터공학과",
    //   },
    // });
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

  // user update
  update = async ({ userId, modifiedUser }) => {
    delete modifiedUser[USER_OBJECT_KEY.EMAIL];
    return await this.put(`/user`, {
      userId,
      ...modifiedUser,
    });
  };
}

export default new UserController();
