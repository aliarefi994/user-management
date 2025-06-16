import { create } from 'zustand'

interface DeleteConfirmState {
  isOpen: boolean
  targetId: number | null
  open: (id: number) => void
  close: () => void
}

export const useDeleteConfirmStore = create<DeleteConfirmState>((set) => ({
  isOpen: false,
  targetId: null,
  open: (id) => set({ isOpen: true, targetId: id }),
  close: () => set({ isOpen: false, targetId: null }),
}))
