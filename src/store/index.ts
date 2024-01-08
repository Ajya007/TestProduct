// productStore.ts
import { create } from 'zustand'

interface ProductStoreState {
  activeId: number | undefined
  openModal: boolean
}

interface ProductStoreActions {
  updateActiveId: (payload: number | undefined) => void
  updateOpenModal: (payload: boolean) => void
}

const productStore = create<ProductStoreState & ProductStoreActions>((set) => ({
  activeId: 0,
  openModal: false,
  updateActiveId: (payload: number | undefined) =>
    set(() => ({ activeId: payload })),
  updateOpenModal: (payload: boolean) => set(() => ({ openModal: payload })),
}))

export default productStore
