import { useState } from "react";

const useIsOpen = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = (next) => {
    if (next === true || next === false) {
      setIsOpen(next);
      return;
    }
    setIsOpen((pre) => !pre);
  };

  return { isOpen, toggleIsOpen };
};

export default useIsOpen;
