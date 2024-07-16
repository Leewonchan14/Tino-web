import { NOT_EMPTY, SMALLER_EQUAL_THAN } from "./validator";

export const EMAIL_FORMAT = [
  NOT_EMPTY,
  {
    regex: new RegExp("^[a-zA-Z0-9._%+-]+@tukorea\\.ac\\.kr$"),
    errorMessage: "학교 이메일만 가능합니다. (tukorea.ac.kr)",
  },
  SMALLER_EQUAL_THAN({ num: 40 }),
];
