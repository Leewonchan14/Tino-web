import { useEffect, useState } from "react";
import { userToMyPageInfo } from "../../utils/userConverter";

export const useUpdateUser = ({ user }) => {
  const [modifiedUser, setModifiedUser] = useState(user);

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

  const handleOnClickUpdateButton = () => {
    if (window.confirm("수정하사겠습니까?")) {
      console.log("update!");
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
