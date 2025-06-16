export interface User {
  id: number
  name: string
  email: string
  phone: string
  website: string
}

export type UpdateUserData = Omit<User, 'id'>

export interface UpdateUserInput {
  id: number
  data: UpdateUserData
}
