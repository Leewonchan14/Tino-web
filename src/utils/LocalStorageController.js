import {
  ACCESS_TOKEN_LOCAL_KEY,
  REFRESH_TOKEN_LOCAL_KEY,
  USER_ID_LOCAL_KEY,
} from "../hooks/login/useAutoLogin";

export const getLocalUserData = () => {
  return {
    accessToken: localStorage.getItem(ACCESS_TOKEN_LOCAL_KEY),
    refreshToken: localStorage.getItem(REFRESH_TOKEN_LOCAL_KEY),
    userId: localStorage.getItem(USER_ID_LOCAL_KEY),
  };
};

export const setLocalData = ({ accessToken, refreshToken, userId }) => {
  localStorage.setItem(ACCESS_TOKEN_LOCAL_KEY, accessToken);
  localStorage.setItem(REFRESH_TOKEN_LOCAL_KEY, refreshToken);
  localStorage.setItem(USER_ID_LOCAL_KEY, userId);
};

export const removeLocalData = () => {
  localStorage.removeItem(ACCESS_TOKEN_LOCAL_KEY);
  localStorage.removeItem(REFRESH_TOKEN_LOCAL_KEY);
  localStorage.removeItem(USER_ID_LOCAL_KEY);
};
