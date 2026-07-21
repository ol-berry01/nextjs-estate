import { ReactNode, ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outline',
  icon?: ReactNode,
  iconPosition?: 'left' | 'right',
  fullWidth?: boolean
}

const Button = ( { variant }:ButtonProps ) => {
  return (
    <div>Button</div>
  )
}

export default Button