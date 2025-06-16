'use client'

import { useUserEditStore } from '@/store/user-edit-store'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useUpdateUser } from '@/hooks/useUpdateUser'
import { useEffect } from 'react'
import { userEditSchema, type UserEditFormData } from '@/schemas/userEditSchema'

export default function UserEditModal() {
  const { isOpen, user, close } = useUserEditStore()
  const updateUser = useUpdateUser()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserEditFormData>({
    resolver: zodResolver(userEditSchema),
    defaultValues: user || {},
  })

  useEffect(() => {
    if (user) {
      reset(user)
    }
  }, [user, reset])

  const onSubmit = (data: UserEditFormData) => {
    if (user) {
      updateUser.mutate(
        { id: user.id, data },
        {
          onSuccess: () => {
            close()
          },
        }
      )
    }
  }

  if (!isOpen || !user) return null

  return (
<div className="fixed inset-0 bg-white/10 backdrop-blur-sm flex justify-center items-center z-50">
<div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <h2 className="text-xl font-bold mb-4">ویرایش کاربر</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">نام</label>
            <input {...register('name')} className="input" />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">ایمیل</label>
            <input {...register('email')} className="input" />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">تلفن</label>
            <input {...register('phone')} className="input" />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">وب‌سایت</label>
            <input {...register('website')} className="input" />
            {errors.website && (
              <p className="text-red-500 text-sm">{errors.website.message}</p>
            )}
          </div>
          <div className="flex justify-end gap-2 pt-4">
            <button
              type="button"
              onClick={close}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              انصراف
            </button>
            <button
              type="submit"
              disabled={updateUser.isPending}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              ذخیره
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
