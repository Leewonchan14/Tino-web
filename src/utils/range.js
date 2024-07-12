export const range = (start, end) => {
  let _start;
  let length;
  if (!end) {
    _start = 0;
    length = start;
  } else {
    _start = start;
    length = end - start;
  }

  return Array.from({ length }).map((_, i) => _start + i);
};
