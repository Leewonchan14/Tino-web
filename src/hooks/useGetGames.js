import {useState} from "react";
import GameController from "../api/game.controller";

export const useGetGames = () => {
    const [gameState, setGameState] = useState([])

    const findAllGame = async ({page, size, sort}) => {
        const response = await GameController.findAll({
            page, size, sort
        });
        setGameState([...gameState, ...response.data])
        return response.data;
    }

    return [gameState, setGameState, findAllGame];
}