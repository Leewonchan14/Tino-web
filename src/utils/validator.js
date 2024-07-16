// { regex, errorMessage } <- 컨벤션
export const EMAIL_FORMAT = {
  regex: new RegExp("^[a-zA-Z0-9._%+-]+@tukorea\\.ac\\.kr$"),
  errorMessage: "학교 이메일만 가능합니다. (tukorea.ac.kr)",
};

export const PASSWORD_FORMAT = {
  regex: new RegExp("^.{6,18}$"),
  errorMessage: "비밀번호는 6자 이상, 18자 이하 이어야 합니다.",
};

export const MATCH_PASSWORD = ({ password }) => ({
  regex: new RegExp(`^${password}$`),
  errorMessage: "비밀번호가 일치하지 않습니다.",
});

export const NOT_EMPTY = {
  regex: new RegExp(".+"),
  errorMessage: "필수 입력 항목입니다.",
};

export const GREATER_EQUAL_THAN = ({ num }) => ({
  regex: new RegExp(`^.{${num},}$`),
  errorMessage: `${num}글자 이상 입력해주세요.`,
});

export const SMALLER_EQUAL_THAN = ({ num }) => ({
  regex: new RegExp(`^.{${0},${num}}$`),
  errorMessage: `${num}글자 이하로 입력해주세요.`,
});

export const ONLY_EQUAL = ({ num }) => ({
  regex: new RegExp(`^.{${num}}$`),
  errorMessage: `${num}글자로 입력해주세요.`,
});

export const ONLY_NUMBER = {
  regex: new RegExp(`^[0-9]*$`),
  errorMessage: `숫자만 입력하세요`,
};

export const GREATER_AND_SMALLER_THAN = ({ min, max }) => ({
  regex: new RegExp(`^.{${min},${max}}$`),
  errorMessage: `${min}글자 이상 ${max}글자 이하로 입력해주세요.`,
});

export const isValidate = ({ value, should = [] }) => {
  const r = {
    isValid: true,
    errorMessage: "",
  };

  for (let { regex, errorMessage } of should) {
    if (!regex.test(value)) {
      r.isValid = false;
      r.errorMessage = errorMessage;
      return r;
    }
  }
  return r;
};
