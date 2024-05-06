import {useEffect, useState} from "react";
import {GameController} from "../api/game.controller";

export const useGetOneGame = ({gameId}) => {
    const [isFetching, setIsFetching] = useState(true);
    const [gameState, setGameState] = useState({})
    const findGameById = async () => {
        setIsFetching(true);
        const response = await GameController.findOneGame({gameId})
        setIsFetching(false);
        setGameState(response.data)
        return response.data;
    }
    useEffect(() => {
        findGameById();
    }, []);
    return {gameState, setGameState, isFetching};
}