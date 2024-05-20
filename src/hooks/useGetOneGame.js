import {GameController} from "../api/game.controller";
import {useQuery} from "@tanstack/react-query";

export const useGetOneGame = ({gameId}) => {

    const findGameById = async () => {
        const response = await GameController.findOneGame({gameId})
        return response.data;
    }

    let {data: gameState, isFetching} = useQuery({
        queryKey: ["game", gameId],
        queryFn: findGameById,
    })

    return {gameState, isFetching};
}