import {useEffect, useState} from "react";
import GameController from "../api/game.controller";
import {useParams} from "react-router-dom";

export const useGatOneGame = (initState) => {
    const [gameState, setGameState] = useState(initState)
    const findGameById = async (gameId) => {
        const response = await GameController.findOneGame({gameId})
        setGameState(response.data)
        return response.data;
    }
    return [gameState, setGameState, findGameById];
}