import LogController from "../../apis/log.controller";
import { userStore } from "../../stores/userStore";
import { delayFetch } from "../../utils/delay";
import { useQuery } from "@tanstack/react-query";
import { MINUTE } from "../../utils/timeConverter";

export const useGetOwnLog = ({ gameId }) => {
  const { isLogin, userId } = userStore((state) => state);
  const {
    isFetching,
    data: ownLogState,
    isSuccess,
  } = useQuery({
    queryKey: ["logs", { gameId, userId }],
    queryFn: async () => {
      let response = await delayFetch({
        fetcherPromise: LogController.findBestLogByGameId({
          gameId,
          userId,
        }),
        milliseconds: 1000,
      });
      return response.data;
    },
    retry: false,
    enabled: isLogin,
    staleTime: 5 * MINUTE,
  });

  return {
    ownLogState,
    isExist: isSuccess && !isFetching,
    isFetching,
    isLogin,
  };
};
