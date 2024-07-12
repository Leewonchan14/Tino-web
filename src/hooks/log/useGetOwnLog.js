import { useEffect, useState } from "react";
import LogController from "../../apis/log.controller";
import { userStore } from "../../stores/userStore";
import { delayFetch } from "../../utils/delay";
import { useQuery } from "@tanstack/react-query";

export const useGetOwnLog = ({ gameId }) => {
  const { isLogin, userId } = userStore((state) => state);
  const [ownLogState, setOwnLogState] = useState({});
  const [isExist, setIsExist] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const findBestLogByGameId = async () => {
    setIsFetching(true);

    let response;

    try {
      response = await delayFetch({
        fetcherPromise: LogController.findBestLogByGameId({
          gameId,
          userId,
        }),
        milliseconds: 1000,
      });
    } catch (err) {
      setIsExist(false);
      return;
    } finally {
      setIsFetching(false);
    }
    setIsExist(true);
    setOwnLogState(response.data);
  };

  useEffect(() => {
    if (!isLogin) return;
    findBestLogByGameId();
  }, [isLogin]);
  return { ownLogState, setOwnLogState, isExist, isFetching, isLogin };
};
