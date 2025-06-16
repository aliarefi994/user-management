"use client";

import Link from "next/link";
import { memo } from "react";
import type { User } from "@/types/user";
import {
  PencilSquareIcon,
  TrashIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";

type Props = {
  user: User;
  onEdit: () => void;
  onDelete: () => void;
};

const UserRow = ({ user, onEdit, onDelete }: Props) => {
  const websiteUrl = user.website.startsWith("http")
    ? user.website
    : `http://${user.website}`;

  return (
    <tr className="hover:bg-gray-50 transition">
      <td className="px-4 py-2 border">{user.name}</td>
      <td className="px-4 py-2 border">{user.email}</td>
      <td className="px-4 py-2 border">{user.phone}</td>
      <td className="px-4 py-2 border">
        <a
          href={websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          {user.website}
        </a>
      </td>
      <td className="px-4 py-2 border text-center">
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={onEdit}
            className="text-indigo-600 hover:text-indigo-800 cursor-pointer"
            title="ویرایش"
          >
            <PencilSquareIcon className="w-5 h-5" />
          </button>

          <button
            onClick={onDelete}
            className="text-red-600 hover:text-red-800 cursor-pointer"
            title="حذف"
          >
            <TrashIcon className="w-5 h-5" />
          </button>

          <Link
            href={`/users/${user.id}`}
            className="text-gray-600 hover:text-green-800 "
            title="جزئیات"
          >
            <EyeIcon className="w-5 h-5" />
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default memo(UserRow);
