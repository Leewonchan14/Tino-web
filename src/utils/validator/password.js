import { NOT_EMPTY } from "./validator";

export const PASSWORD_FORMAT = [
  NOT_EMPTY,
  {
    regex: new RegExp("^.{6,18}$"),
    errorMessage: "비밀번호는 6자 이상, 18자 이하 이어야 합니다.",
  },
];
