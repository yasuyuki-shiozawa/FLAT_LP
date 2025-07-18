'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Send, Loader2, CheckCircle } from 'lucide-react'
import { contactFormSchema, ContactFormData } from '@/lib/validations'
import { cn } from '@/lib/utils'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    // ここで実際のフォーム送信処理を実装
    // 今回はシミュレーション
    await new Promise((resolve) => setTimeout(resolve, 2000))
    
    console.log('フォームデータ:', data)
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    reset()
    
    // 3秒後に送信完了メッセージを非表示
    setTimeout(() => {
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* 会社名 */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-text-dark mb-2">
            会社名 <span className="text-error">*</span>
          </label>
          <input
            id="company"
            type="text"
            {...register('company')}
            className={cn(
              "w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all",
              errors.company ? "border-error" : "border-border"
            )}
            placeholder="例：株式会社〇〇建設"
          />
          {errors.company && (
            <p className="mt-1 text-sm text-error">{errors.company.message}</p>
          )}
        </div>

        {/* お名前 */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text-dark mb-2">
            ご担当者名 <span className="text-error">*</span>
          </label>
          <input
            id="name"
            type="text"
            {...register('name')}
            className={cn(
              "w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all",
              errors.name ? "border-error" : "border-border"
            )}
            placeholder="例：山田太郎"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-error">{errors.name.message}</p>
          )}
        </div>

        {/* 電話番号 */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-text-dark mb-2">
            電話番号 <span className="text-error">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            {...register('phone')}
            className={cn(
              "w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all",
              errors.phone ? "border-error" : "border-border"
            )}
            placeholder="例：03-1234-5678"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-error">{errors.phone.message}</p>
          )}
        </div>

        {/* メールアドレス */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-2">
            メールアドレス <span className="text-error">*</span>
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className={cn(
              "w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all",
              errors.email ? "border-error" : "border-border"
            )}
            placeholder="例：info@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-error">{errors.email.message}</p>
          )}
        </div>

        {/* ご相談内容 */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-text-dark mb-2">
            ご相談内容（任意）
          </label>
          <textarea
            id="message"
            {...register('message')}
            rows={4}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
            placeholder="お困りごとをお聞かせください"
          />
        </div>

        {/* 送信ボタン */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "w-full py-4 px-6 rounded-lg font-bold text-white transition-all duration-300 flex items-center justify-center space-x-2",
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-accent hover:bg-accent-dark hover:scale-105 hover:shadow-lg"
          )}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>送信中...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>無料相談を申し込む</span>
            </>
          )}
        </button>

        {/* 送信完了メッセージ */}
        {isSubmitted && (
          <div className="bg-success/10 border border-success text-success p-4 rounded-lg flex items-center space-x-2 animate-fade-in">
            <CheckCircle className="w-5 h-5" />
            <span>送信が完了しました。担当者より折り返しご連絡いたします。</span>
          </div>
        )}
      </form>

      {/* 注意事項 */}
      <div className="mt-6 text-caption text-text-gray">
        <p>※ 必須項目は必ずご入力ください。</p>
        <p>※ 送信いただいた個人情報は、お問い合わせ対応にのみ使用いたします。</p>
      </div>
    </div>
  )
}