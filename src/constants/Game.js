export const GAME_SORT_MENU = [
  { name: "조회순", value: "VIEW_COUNT", text: "조회수", score: "viewCount" },
  {
    name: "인기순",
    value: "LOG_COUNT",
    text: "게임설명",
    score: "description",
  },
  { name: "댓글순", value: "RECENT", text: "댓글수", score: "reviewCount" },
  {
    name: "최신순",
    value: "REVIEW_COUNT",
    text: "등록 일자",
    score: "createdAt",
  },
];
