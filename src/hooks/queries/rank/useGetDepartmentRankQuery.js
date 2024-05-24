import RankController from "../../../apis/rank.controller";
import {useQuery} from "@tanstack/react-query";
import {MINUTE} from "../../../utils/timeConverter";

const useGetDepartmentRankQuery = () => {
    const fetchDepartmentRank = async () => {
        let response = await RankController.findDepartmentRank();
        return response.data.rankList;
    }

    let {
        data: departmentState,
        isFetching,
        isSuccess
    } = useQuery({
        queryKey: ["rank", "department"],
        queryFn: async (args) => {
            console.log(args);
            return await fetchDepartmentRank();
        },
        staleTime: MINUTE,
        gcTime: 5 * MINUTE
    })

    return {isSuccess, departmentState, isFetching}
}

export default useGetDepartmentRankQuery;