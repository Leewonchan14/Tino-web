import { useState } from "react";
import { MAJOR } from "../../../constants/Major";
import RankController from "../../../apis/rank.controller";
import { useInfiniteQuery } from "@tanstack/react-query";
import { MINUTE } from "../../../utils/timeConverter";
import { delayFetch } from "../../../utils/delay";

const PAGE_SIZE = 10;

export const useGetInDepartmentRankQuery = () => {
  const [selectMajor, setSelectMajor] = useState(MAJOR[0]);

  const onChange = (name) => {
    setSelectMajor(MAJOR.find((major) => major.name === name));
  };

  const fetchInDepartmentRank = async ({ page }) => {
    let response = await delayFetch({
      fetcherPromise: RankController.findInDepartmentRank({
        page,
        size: PAGE_SIZE,
        major: selectMajor.name,
      }),
      milliseconds: 200,
    });
    return response.data.rankList;
  };

  let {
    data: inDepartmentState,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isSuccess,
  } = useInfiniteQuery({
    queryKey: ["rank", "department", selectMajor.name],
    queryFn: async (args) => {
      return await fetchInDepartmentRank({
        page: args.pageParam,
      });
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.length < PAGE_SIZE) return undefined;
      return lastPageParam + 1;
    },
    staleTime: MINUTE,
    gcTime: 5 * MINUTE,
  });

  return {
    inDepartmentState,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isSuccess,
    selectMajor,
    onChange,
  };
};
