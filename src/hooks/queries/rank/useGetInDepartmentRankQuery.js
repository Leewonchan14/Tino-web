import { useState } from "react";
import { MAJOR } from "../../../constants/Major";
import RankController from "../../../apis/rank.controller";
import { useInfiniteQuery } from "@tanstack/react-query";
import { MINUTE } from "../../../utils/timeConverter";

export const useGetInDepartmentRankQuery = () => {
  const [selectMajor, setSelectMajor] = useState(MAJOR[0]);

  const onChange = (name) => {
    setSelectMajor(MAJOR.find((major) => major.name === name));
  };

  const fetchInDepartmentRank = async ({ page, size }) => {
    let response = await RankController.findInDepartmentRank({
      page,
      size,
      major: selectMajor.name,
    });
    return response.data.rankList;
  };

  let {
    data: inDepartmentState,
    isFetching,
    fetchNextPage,
    isSuccess,
  } = useInfiniteQuery({
    queryKey: ["rank", "department", selectMajor.name],
    queryFn: async (args) => {
      return await fetchInDepartmentRank({ page: args.pageParam, size: 10 });
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.length === 0) return undefined;
      return lastPageParam + 1;
    },
    staleTime: MINUTE,
    gcTime: 5 * MINUTE,
  });

  return {
    inDepartmentState,
    isFetching,
    fetchNextPage,
    isSuccess,
    selectMajor,
    onChange,
  };
};
