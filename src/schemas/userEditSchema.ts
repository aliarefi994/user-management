import { z } from 'zod'

export const userEditSchema = z.object({
  name: z.string().min(2, { message: 'نام باید حداقل ۲ کاراکتر باشد' }),
  email: z.string().email({ message: 'ایمیل وارد شده معتبر نیست' }),
  phone: z.string().min(5, { message: 'شماره تلفن باید حداقل ۵ رقم باشد' }),
  website: z
    .string()
    .transform((val) => (!/^https?:\/\//i.test(val) ? 'http://' + val : val))
    .refine((val) => {
      try {
        new URL(val)
        return true
      } catch {
        return false
      }
    }, { message: 'آدرس وب‌سایت نامعتبر است' }),
})

export type UserEditFormData = z.infer<typeof userEditSchema>




