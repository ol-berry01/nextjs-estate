import { InputHTMLAttributes } from 'react'

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

const Input = ( {}:InputProps | TextareaProps ) => {
  return (
    <div>Input</div>
  )
}

export default Input