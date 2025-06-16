"use client"
import { useAppMutation } from './useAppMutation'
import api from '@/lib/axios'
import type { UpdateUserInput } from '@/types/user'
import { normalizeError } from '../utils/normalizeError'
import { toast } from 'react-hot-toast'

export const useUpdateUser = () => {
  return useAppMutation<void, unknown, UpdateUserInput>({
    mutationFn: ({ id, data }) => api.put(`/users/${id}`, data),

    onSuccess: (_, variables) => {
      console.log(`کاربر ${variables.id} با موفقیت به‌روزرسانی شد`)
    },

    onError: (error, variables) => {
      const message = normalizeError(error)
      toast.error(message)
      console.warn(`خطا در به‌روزرسانی کاربر ${variables.id}`, error)
    },
  })
}
