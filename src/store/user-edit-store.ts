import { create } from 'zustand'

interface User {
  id: number
  name: string
  email: string
  phone: string
  website: string
}

interface EditModalState {
  isOpen: boolean
  user: User | null
  open: (user: User) => void
  close: () => void
}

export const useUserEditStore = create<EditModalState>((set) => ({
  isOpen: false,
  user: null,
  open: (user) => set({ isOpen: true, user }),
  close: () => set({ isOpen: false, user: null }),
}))
