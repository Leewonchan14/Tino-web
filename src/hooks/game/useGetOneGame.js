import {useQuery} from "@tanstack/react-query";
import GameController from "../../apis/game.controller";
import {MINUTE} from "../../utils/timeConverter";

export const useGetOneGame = ({gameId}) => {

    const findGameById = async () => {
        const response = await GameController.findOneGame({gameId})
        return response.data;
    }

    let {data: gameState, isFetching} = useQuery({
        queryKey: ["game", gameId],
        queryFn: findGameById,
        staleTime: 5 * MINUTE,
        gcTime: 5 * MINUTE,
    })

    return {gameState, isFetching};
}