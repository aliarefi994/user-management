// types.ts
export interface User {
  id: string;
  name: string;
  email: string;
}

// userHooks.ts
import { useGetData, useCreateData, useUpdateData, useDeleteData } from './apiHooks';

// هوک برای دریافت لیست کاربران
export function useGetUsers() {
  return useGetData<User[]>('users', '/users', undefined, {
    staleTime: 1000 * 60 * 5, // 5 دقیقه
  });
}

// هوک برای دریافت یک کاربر خاص
export function useGetUser(userId: string) {
  return useGetData<User>(['user', userId], `/users/${userId}`);
}

// هوک برای ایجاد کاربر
export function useCreateUser() {
  return useCreateData<User, Omit<User, 'id'>>('/users', {
    onSuccess: () => {
      // invalidate یا refetch لیست کاربران
    },
  });
}

// هوک برای به‌روزرسانی کاربر
export function useUpdateUser(userId: string) {
  return useUpdateData<User, Partial<User>>(`/users/${userId}`, {
    onSuccess: () => {
      // invalidate یا refetch کاربر
    },
  });
}

// هوک برای حذف کاربر
export function useDeleteUser() {
  return useDeleteData<unknown>('/users', {
    onSuccess: () => {
      // invalidate یا refetch لیست کاربران
    },
  });
}