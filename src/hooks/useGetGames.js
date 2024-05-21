import {useState} from "react";
import {GameController} from "../api/game.controller";
import {useInfiniteQuery} from "@tanstack/react-query";
import useReactQueryInfiniteScroll from "./useReactQueryInfiniteScroll";

const MINUTE = 60 * 1000;
const SECOND = 1000;

export const useGetGames = ({sortState}) => {
    const findAllGame = async ({page, size, sort}) => {
        const response = await GameController.findAll({
            page, size, sort
        });
        return response.data;
    }

    let {
        data: gameState,
        isFetching,
        fetchNextPage,
        isSuccess
    } = useInfiniteQuery({
        queryKey: ['games', {sort: sortState}],
        queryFn: async (args) => {
            return await findAllGame({page: args.pageParam, size: 3, sort: sortState})
        },
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages, lastPageParam) => {
            if (lastPage.length === 0) return undefined;

            return lastPageParam + 1;
        },
        enabled: false,
        staleTime: 30 * SECOND,
        gcTime : 30 * SECOND
    })


    return {isSuccess, isFetching, gameState, fetchNextPage};
}

export default useGetGames;