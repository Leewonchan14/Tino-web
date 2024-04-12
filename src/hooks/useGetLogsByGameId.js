import {useState} from "react";
import GameController from "../api/game.controller";
import LogController from "../api/log.controller";

export const useGetLogsByGameId = () => {
    const [logState, setLogState] = useState([])

    const findLogsByGameId = async ({gameId, page, size}) => {
        const response = await LogController.findLogsByGameId({
            gameId, page, size
        });
        setLogState([...logState, ...response.data])
        return response.data;
    }

    return [logState, setLogState, findLogsByGameId];
}