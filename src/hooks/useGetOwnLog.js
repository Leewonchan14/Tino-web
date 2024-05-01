import {useState} from "react";
import LogController from "../api/log.controller";

export const useGetOwnLog = (initState) => {
    const [ownLogState, setOwnLogState] = useState(initState)
    const [isExist, setIsExist] = useState(true)
    const [isFetching, setIsFetching] = useState(true)
    const [error, setError] = useState(null)
    const findBestLogByGameId = async (gameId, userId) => {
        setIsFetching(true)
        try {
            const response = await LogController.findBestLogByGameId({gameId, userId})
            setOwnLogState(response.data)
            setIsExist(true)
            setError(null)
            setIsFetching(false)
        } catch (err) {
            setIsFetching(false)
            console.log(error);
            setIsExist(false)
            setError(err.response ? err.response.data : 'An unknown error occurred')
        }
    }
    return [ownLogState, setOwnLogState, isExist, isFetching, findBestLogByGameId];
}