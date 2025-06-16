"use client"
import { useQuery } from '@tanstack/react-query'
import api from '@/lib/axios'
import type { User } from '@/types/user'
import { toast } from 'react-hot-toast'
import { normalizeError } from '../utils/normalizeError'
import { useEffect } from 'react'

export const useUserDetail = (id: number | undefined) => {
  const query = useQuery<User>({
    queryKey: ['user', id],
    enabled: !!id,
    queryFn: async () => {
      const response = await api.get(`/users/${id}`)
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
