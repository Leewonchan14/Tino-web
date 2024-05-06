import {useState} from "react";
import GameController from "../api/game.controller";

export const useGetOneGame = (initState) => {
    const [isFetching, setIsFetching] = useState(true);
    const [gameState, setGameState] = useState(initState)
    const findGameById = async (gameId) => {
        setIsFetching(true);
        const response = await GameController.findOneGame({gameId})
        setGameState(response.data)
        setIsFetching(false);
        return response.data;
    }
    return {isFetching, gameState, setGameState, findGameById};
}