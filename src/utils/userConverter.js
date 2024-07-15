export const userToMyPageInfo = (user) => {
  return {
    [USER_OBJECT_KEY.NICKNAME]: user.nickname,
    [USER_OBJECT_KEY.EMAIL]: user.email,
    [USER_OBJECT_KEY.MAJOR]: user.major,
    [USER_OBJECT_KEY.PROFILE_IMAGE_URL]: user.profileImageURL,
  };
};

export const USER_OBJECT_KEY = {
  NICKNAME: "nickname",
  EMAIL: "email",
  MAJOR: "major",
  PROFILE_IMAGE_URL: "profileImageURL",
};

export const nicknameTextSizeInMyPage = (name) => {
  if (name === USER_OBJECT_KEY.NICKNAME) return "text-3xl max-w-96";
};
