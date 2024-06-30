import { create } from "zustand";

export const userStore = create((set) => ({
  isLogin: false,
  userId: "",
  changeIsLogin: (isLogin) => set({ isLogin }),
  changeUserId: (userId) => set({ userId }),
  // setIsLogin: (isLogin) => set({ isLogin }),
  // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  // removeAllBears: () => set({ bears: 0 }),
  // updateBears: (newBears) => set({ bears: newBears }),
}));
