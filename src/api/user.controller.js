import {Api} from "./common.controller";

class UserController extends Api {

    // 로그인
    login = async ({email, password}) => {
        return new Promise((resolve, reject) => {
            resolve({
                data: {
                    "userId": "112",
                    "token": {
                        "accessToken": "string",
                        "refreshToken": "string"
                    }
                }
            })
        })
    };

    // 회원 가입
    signUp = async ({email, password, nickname, major, code}) => {
        return new Promise((resolve, reject) => {
            resolve({
                data: {
                    "userId": "112",
                    "nickname": "이원찬",
                    "email": "twoone14@tukorea.ac.kr",
                    "profileImageURL": "string",
                    "parentMajor": "컴퓨터공학부",
                    "major": "소프트웨어학과",
                    "token": {
                        "accessToken": "string",
                        "refreshToken": "string"
                    }
                }
            })
        })
    };


    // userId 로 user 조회
    findUserById = async (userId) => {
        return new Promise((resolve, reject) => {
            resolve({
                data: {
                    "userId": "112",
                    "nickname": "이원찬",
                    "email": "twoone14@tukorea.ac.kr",
                    "profileImageURL": "string",
                    "parentMajor": "컴퓨터공학부",
                    "major": "소프트웨어학과",
                    "role": "USER"
                },
            });
        });
    }

    // auto login
    autoLogin = async ({userId, accessToken, refreshToken}) => {
        return new Promise((resolve, reject) => {
            resolve({
                data: {
                    "isSuccess": true,
                    "userId": "112",
                    "token": {
                        "accessToken": "string",
                        "refreshToken": "string"
                    }
                }
            })
        });
    }
}

export default new UserController();
