import type { User } from '@/types/user'
export function filterUsers(users: User[], term: string): User[] {
  const t = term.trim().toLowerCase()
  if (!t) return users

  return users.filter((user) =>
    [user.name, user.email, user.phone, user.website].some(field =>
      field.toLowerCase().includes(t)
    )
  )
}
