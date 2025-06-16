"use client"
import { useQuery } from '@tanstack/react-query'
import api from '@/lib/axios'
import type { User } from '@/types/user'
import { toast } from 'react-hot-toast'
import { normalizeError } from '../utils/normalizeError'
import { useEffect } from 'react'

export const useGetUsers = () => {
  const query = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await api.get('/users')
      if (!Array.isArray(response.data)) {
        throw new Error('پاسخ کاربران باید آرایه باشد')
      }
      return response.data
    },
  })

  useEffect(() => {
    if (query.isError && query.error) {
      const message = normalizeError(query.error)
      toast.error(message)
    }
  }, [query.isError, query.error])

  return query
}
