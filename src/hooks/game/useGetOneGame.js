import { useQuery } from "@tanstack/react-query";
import GameController from "../../apis/game.controller";
import { MINUTE } from "../../utils/timeConverter";
import { delayFetch } from "../../utils/delay";

export const useGetOneGame = ({ gameId }) => {
  const findGameById = async () => {
    const response = await delayFetch({
      fetcherPromise: GameController.findOneGame({ gameId }),
      milliseconds: 300,
    });
    return response.data;
  };

  let { data: gameState, isFetching } = useQuery({
    queryKey: ["game", gameId],
    queryFn: findGameById,
    staleTime: 5 * MINUTE,
    gcTime: 5 * MINUTE,
  });

  return { gameState, isFetching };
};
