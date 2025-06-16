"use client"
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { normalizeError } from '../utils/normalizeError' 

export function useAppMutation<
  TData = unknown,
  TError = unknown,
  TVariables = void,
  TContext = unknown
>(
  options: UseMutationOptions<TData, TError, TVariables, TContext>
): UseMutationResult<TData, TError, TVariables, TContext> {
  return useMutation({
    ...options,
    onError: (error, variables, context) => {
      const message = normalizeError(error)
      toast.error(message)

      if (options.onError) {
        options.onError(error, variables, context)
      }
    },
    onSuccess: (data, variables, context) => {
      toast.success('عملیات با موفقیت انجام شد ✅')

      if (options.onSuccess) {
        options.onSuccess(data, variables, context)
      }
    },
  })
}
