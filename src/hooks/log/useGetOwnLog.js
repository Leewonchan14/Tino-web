import {useEffect, useState} from "react";
import LogController from "../../apis/log.controller";

export const useGetOwnLog = ({gameId, userId}) => {
    const [ownLogState, setOwnLogState] = useState({})
    const [isExist, setIsExist] = useState(true)
    const [isFetching, setIsFetching] = useState(true)
    const findBestLogByGameId = async (gameId, userId) => {
        setIsFetching(true)
        try {
            const response = await LogController.findBestLogByGameId({gameId, userId})
            setOwnLogState(response.data)
            setIsExist(true)
            setIsFetching(false)
        } catch (err) {
            setIsFetching(false)
            setIsExist(false)
        }
    }

    useEffect(() => {
        findBestLogByGameId(gameId, userId);
    }, []);
    return {ownLogState, setOwnLogState, isExist, isFetching};
}