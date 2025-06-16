import { ReactNode } from 'react'

export interface ConfirmModalProps {
  isOpen: boolean
  title?: string
  message: string | ReactNode
  onCancel: () => void
  onConfirm: () => void
  confirmLabel?: string
  cancelLabel?: string
  isLoading?: boolean
}
