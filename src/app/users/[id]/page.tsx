'use client'

import { use } from 'react'
import { useRouter } from 'next/navigation'
import { useUserDetail } from '@/hooks/useUserDetail'

export default function UserDetailPage(promiseProps: { params: Promise<{ id: string }> }) {
  const { id } = use(promiseProps.params)
  const router = useRouter()
  const userId = parseInt(id)
  const { data: user, isLoading, isError } = useUserDetail(userId)

  if (isLoading)
    return (
      <div className="p-6 flex justify-center items-center">
        <p className="text-gray-600">در حال دریافت اطلاعات کاربر...</p>
      </div>
    )

  if (isError || !user)
    return (
      <div className="p-6 flex justify-center items-center">
        <p className="text-red-500">خطا در دریافت اطلاعات</p>
      </div>
    )

  return (
    <div className="p-6 flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 space-y-4">
        <h1 className="text-2xl font-bold text-center border-b pb-2">مشخصات کاربر</h1>

        <div className="space-y-2 text-gray-800">
          <p><span className="font-semibold">نام:</span> {user.name}</p>
          <p><span className="font-semibold">ایمیل:</span> {user.email}</p>
          <p><span className="font-semibold">تلفن:</span> {user.phone}</p>
          <p>
            <span className="font-semibold">وب‌سایت:</span>{' '}
            <a
              href={`http://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              {user.website}
            </a>
          </p>
        </div>

        <div className="pt-4 border-t">
          <button
            onClick={() => router.back()}
            className="w-full py-2 px-4 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition cursor-pointer"
          >
            بازگشت
          </button>
        </div>
      </div>
    </div>
  )
}
