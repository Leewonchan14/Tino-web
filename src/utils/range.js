export const range = (start, end) => {
  return Array.from({ length: end - start + 1 }).map((_, i) => i + 1);
};
