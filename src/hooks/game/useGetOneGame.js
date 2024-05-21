import {GameController} from "../../api/game.controller";
import {useQuery} from "@tanstack/react-query";

const MINUTE = 60 * 1000;
const SECOND = 1000;

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