import { ReactNode, 
  ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outline',
  icon?: ReactNode,
  iconPosition?: 'left' | 'right',
  fullWidth?: boolean,
  loading?: false
}

const Button = ( { 
  variant = 'primary', 
  children, 
  icon, 
  iconPosition, 
  fullWidth = false, 
  loading = false, 
  disabled, 
  className, 
  ...props 
}:ButtonProps ) => {
  return (
    <div>Button</div>
  )
}

export default Button