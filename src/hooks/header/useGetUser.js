import { userStore } from "../../stores/userStore";
import UserController from "../../apis/user.controller";
import { useQuery } from "@tanstack/react-query";
import { delayFetch } from "../../utils/delay";
import { HOUR, SECOND } from "../../utils/timeConverter";

export const useGetUser = () => {
  const { isLogin, userId } = userStore((state) => state);
  const fetchUserById = async () => {
    const response = await delayFetch({
      fetcherPromise: UserController.findUserById(userId),
      milliseconds: 1500,
    });
    return response.data;
  };

  let { isFetching, data: user } = useQuery({
    queryKey: ["user", userId],
    queryFn: fetchUserById,
    enabled: isLogin,
    gcTime: 2 * HOUR,
    staleTime: 2 * HOUR,
  });

  return { user, isFetching };
};
