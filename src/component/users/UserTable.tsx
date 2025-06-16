"use client";

import { useGetUsers } from "@/hooks/useGetUsers";
import { useDeleteUser } from "@/hooks/useDeleteUser";
import { useUserFilterStore } from "@/store/user-filter-store";
import { useUserEditStore } from "@/store/user-edit-store";
import { useDeleteConfirmStore } from "@/store/delete-confirm-store";
import UserSearch from "./UserSearch";
import UserEditModal from "../modals/UserEditModal";
import ConfirmModal from "../modals/ConfirmModal";
import { userColumns } from "@/config/user-columns";
import { useMemo } from "react";
import { filterUsers } from "@/utils/user-filter";
import UserRow from "./UserRow";

export default function UserTable() {
  const { data: users, isLoading, isError } = useGetUsers();
  const deleteUserMutation = useDeleteUser();
  const { search } = useUserFilterStore();
  const { open: openEdit } = useUserEditStore();
  const { isOpen, targetId, open: openDelete, close } = useDeleteConfirmStore();

  const filteredUsers = useMemo(
    () => filterUsers(users ?? [], search),
    [users, search]
  );

  const handleConfirmDelete = () => {
    if (targetId !== null) {
      deleteUserMutation.mutate(targetId, {
        onSettled: close,
      });
    }
  };

  if (isLoading) return <p className="p-4">در حال بارگذاری...</p>;
  if (isError)
    return <p className="p-4 text-red-500">خطا در دریافت اطلاعات کاربران</p>;

  return (
    <div className="overflow-x-auto p-4">
      <UserSearch />

      <table className="min-w-full table-auto border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            {userColumns.map((col) => (
              <th
                key={col.accessor as string}
                className={`px-4 py-2 border ${col.className || ""}`}
              >
                {col.label}
              </th>
            ))}
            <th className="px-4 py-2 border">عملیات</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <UserRow
              key={user.id}
              user={user}
              onEdit={() => openEdit(user)}
              onDelete={() => openDelete(user.id)}
            />
          ))}

          {filteredUsers.length === 0 && (
            <tr>
              <td colSpan={5} className="text-center py-4 text-gray-500">
                کاربری یافت نشد.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <UserEditModal />

      <ConfirmModal
        isOpen={isOpen}
        message="آیا از حذف کاربر مطمئن هستید؟"
        onCancel={close}
        onConfirm={handleConfirmDelete}
        isLoading={deleteUserMutation.isPending}
      />
    </div>
  );
}
