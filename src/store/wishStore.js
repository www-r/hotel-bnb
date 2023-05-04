import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useWishStore = create(
  persist(
    (set) => ({
      wishlist: [],
      addWish: (id) => set((state) => ({ wishlist: [...state.wishlist, id] })),
      deleteWish: (id) =>
        set((state) => ({ wishlist: state.wishlist.filter((wish) => wish !== id) })),
    }),
    { name: 'wish', storage: createJSONStorage(() => localStorage) },
  ),
)
