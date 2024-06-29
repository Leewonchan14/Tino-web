export const SECOND = 1000;
export const MINUTE = 1000 * 60;

const timeConverter = (dateTime) => {
  let date = new Date(dateTime);
  let hours = date.getHours();
  if (hours < 10) {
    hours = "0" + hours;
  }

  if (hours > 12) {
    hours = hours - 12;
  }

  const now = new Date();
  const gap_sec = (now - date) / 1000;

  // 만약 현재 시간과 1분 이내라면
  if (gap_sec < 60) {
    return "방금 전";
  }

  // 1시간 이내라면
  if (gap_sec < 60 * 60) {
    return Math.floor(gap_sec / 60) + "분 전";
  }

  // 1일 이내라면
  if (gap_sec < 60 * 60 * 24) {
    return Math.floor(gap_sec / (60 * 60)) + "시간 전";
  }

  // 1달 이내라면
  if (gap_sec < 60 * 60 * 24 * 30) {
    return Math.floor(gap_sec / (60 * 60 * 24)) + "일 전";
  }

  // 1년 이하라면 (~개월 전)
  if (gap_sec < 60 * 60 * 24 * 365) {
    return Math.floor(gap_sec / (60 * 60 * 24 * 30)) + "개월 전";
  }

  // 1년 이상이라면 (~년 전)
  if (gap_sec >= 60 * 60 * 24 * 365 * 1000) {
    return Math.floor(gap_sec / (60 * 60 * 24 * 365)) + "년 전";
  }
};

export const timeToYearMonthDay = (dateTime) => {
  let date = new Date(dateTime);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  return `${year}년 ${month}월 ${day}일`;
};

export default timeConverter;
