// با توجه به مستندات تسک ، ایجاد کاربر خواسته نشده_ اما چون 
//crud خواسته  شده، این هوک نوشته شد
"use client"
import { useMutation, useQueryClient } from '@tanstack/react-query'
import api from '@/lib/axios'
import type { User } from '@/types/user'

export const useCreateUser = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (newUser: Omit<User, 'id'>) => {
      const response = await api.post('/users', newUser)
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
  })
}
