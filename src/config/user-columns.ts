import type { Column } from '@/types/column'
import type { User } from '@/types/user'

export const userColumns: Column<User>[] = [
  { label: 'نام', accessor: 'name' },
  { label: 'ایمیل', accessor: 'email' },
  { label: 'تلفن', accessor: 'phone' },
  { label: 'وب‌ سایت', accessor: 'website' },
]
