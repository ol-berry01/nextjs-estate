import { ReactNode, ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

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
  iconPosition = 'left', 
  fullWidth = false, 
  loading = false, 
  disabled, 
  className, 
  ...props 
}:ButtonProps ) => (
  <button
    disabled={ loading || disabled }
    className={ clsx( 
      `
        h-13 px-6 rounded-2xl
        font-semibold cursor-pointer transition-all duration-300
        inline-flex items-center justify-center gap-2
      `,
      { 
        'bg-primary hover:bg-primary/90 text-white': variant === 'primary',
        'bg-card text-text border border-black/10 hover:text-primary hover:border-primary': variant = 'outline',
        'w-full': fullWidth,
        'opacity-70 cursor-not-allowed': loading || disabled
      },
      className
    ) }
    { ...props }
  >
    { loading ? (
      <>
        <div className={ 'w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin' } />
        <span>Loading...</span>
      </>
    ) : (
      <>
        { /* icon position: left */ }
        { icon && iconPosition === 'left' && (
          <span>{ icon }</span>
        ) }
        { children }
        { /* icon position right */ }
        { icon && iconPosition === 'right' && (
          <span>{ icon }</span>
        ) }
      </>
    ) }
  </button>
)

export default Button