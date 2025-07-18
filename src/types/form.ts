export interface ContactFormData {
  company: string
  name: string
  phone: string
  email: string
  message?: string
}

export interface FormFieldProps {
  name: keyof ContactFormData
  type: 'text' | 'tel' | 'email' | 'textarea'
  label: string
  placeholder: string
  required: boolean
}