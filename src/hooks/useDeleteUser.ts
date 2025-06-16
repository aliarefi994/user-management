"use client"
import { useAppMutation } from './useAppMutation'
import api from '@/lib/axios'
import { normalizeError } from '../utils/normalizeError'
import { toast } from 'react-hot-toast'

export const useDeleteUser = () => {
  return useAppMutation<void, unknown, number>({
    mutationFn: (id: number) => api.delete(`/users/${id}`),

    onSuccess: (_, id) => {
      console.log(`کاربر با شناسه ${id} حذف شد`)
    },

    onError: (error, id) => {
      const message = normalizeError(error)
      toast.error(message)
      console.warn(`حذف کاربر ${id} با خطا مواجه شد`, error)
    },
  })
}
