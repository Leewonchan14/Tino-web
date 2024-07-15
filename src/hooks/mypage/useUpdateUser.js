import { useEffect, useState } from "react";
import { userToMyPageInfo } from "../../utils/userConverter";
import UserController from "../../apis/user.controller";
import { userStore } from "../../stores/userStore";
import { useQueryClient } from "@tanstack/react-query";

export const useUpdateUser = ({ user }) => {
  let { userId } = userStore((state) => state);

  const [modifiedUser, setModifiedUser] = useState(null);

  const [isActiveInput, setIsActiveInput] = useState(false);

  const handleClickActiveButton = () => {
    setIsActiveInput((pre) => !pre);
  };

  const handleOnChange = (name, value) => {
    setModifiedUser((pre) => ({ ...pre, [name]: value }));
  };

  useEffect(() => {
    if (!user) return;
    setModifiedUser(userToMyPageInfo(user));
  }, [user]);

  useEffect(() => {
    console.log(modifiedUser);
  }, [modifiedUser]);

  const queryClient = useQueryClient();

  const handleOnClickUpdateButton = async () => {
    if (window.confirm("수정하사겠습니까?")) {
      try {
        queryClient.setQueryData(["user", userId], (old) => {
          return {
            ...old,
            ...modifiedUser,
          };
        });
        setIsActiveInput(false);
        await UserController.update({ userId, modifiedUser });
      } catch (e) {
        console.log(e);
      }
    }
  };

  return {
    isActiveInput,
    handleClickActiveButton,
    modifiedUser,
    handleOnChange,
    handleOnClickUpdateButton,
  };
};
