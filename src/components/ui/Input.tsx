import { InputHTMLAttributes } from 'react'

import clsx from 'clsx'

interface BaseProps {
  label: string,
  name: string,
  error?: string,
  as?: 'input' | 'textarea',
  value: string,
  onchange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

type InputProps = BaseProps & InputHTMLAttributes<HTMLInputElement>

type TextareaProps = BaseProps & InputHTMLAttributes<HTMLTextAreaElement>

const Input = ( {
  label,
  name,
  error,
  id,
  value,
  as = 'input',
  className,
  onchange,
  ...props
}:InputProps | TextareaProps ) => {
  const hasValue = value !== ''
  const inputId = id ?? name
  const sharedClasses = clsx(
    `bg-white text-gray-600 w-full px-4 border outline-none transition text-sm peer focus:border-2 disabled:opacity-70`,
    error ? 'border-red-500 focus:border-red-500' : 'border-gray-400 focus:border-black'
  )

  return (
    <div>Input</div>
  )
}

export default Input