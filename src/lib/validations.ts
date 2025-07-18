import { z } from 'zod'

export const contactFormSchema = z.object({
  company: z.string().min(1, '会社名を入力してください'),
  name: z.string().min(1, 'お名前を入力してください'),
  phone: z
    .string()
    .min(1, '電話番号を入力してください')
    .regex(
      /^[0-9-]+$/,
      '電話番号は半角数字とハイフンのみで入力してください'
    )
    .regex(
      /^0\d{1,4}-?\d{1,4}-?\d{4}$/,
      '正しい電話番号の形式で入力してください'
    ),
  email: z
    .string()
    .min(1, 'メールアドレスを入力してください')
    .email('正しいメールアドレスの形式で入力してください'),
  message: z.string().optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>