'use client'

import { ConfirmModalProps } from '@/types/modal'
export default function ConfirmModal({
  isOpen,
  title = 'تأیید عملیات',
  message,
  onCancel,
  onConfirm,
  confirmLabel = 'حذف',
  cancelLabel = 'انصراف',
  isLoading = false,
}: ConfirmModalProps) {
  if (!isOpen) return null

  return (
    <div className={`fixed inset-0 bg-white/10 backdrop-blur-sm z-50 ${!isOpen ? 'hidden' : 'flex'} justify-center items-center`}>
      <div className="bg-white rounded shadow-md p-6 w-full max-w-sm">
        <h2 className="text-lg font-bold mb-4">{title}</h2>
        <div className="mb-6 text-sm text-gray-700">{message}</div>
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            {cancelLabel}
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={isLoading}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-50"
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  )
}