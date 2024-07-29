import { useSearchParams } from "react-router-dom";

const useGetQueryString = (queryKey) => {
  const [query, set] = useSearchParams();
  let queryObj = Object.fromEntries(query.entries());
  const setQuery = (queryValue) => {
    set({
      ...queryObj,
      [queryKey]: queryValue,
    });
  };
  return [queryObj, setQuery, queryObj[queryKey]];
};
export default useGetQueryString;
