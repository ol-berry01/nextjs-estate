import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

import clsx from 'clsx'

interface BaseProps {
  label: string,
  name: string,
  error?: string,
  as?: 'input' | 'textarea',
  value: string,
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

type InputProps = BaseProps & InputHTMLAttributes<HTMLInputElement>

type TextareaProps = BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement>

const Input = ( {
  label,
  name,
  error,
  id,
  value,
  as = 'input',
  className,
  onChange,
  ...props
}:InputProps | TextareaProps ) => {
  const hasValue = value !== ''
  const inputId = id ?? name
  const sharedClasses = clsx(
    `bg-white text-gray-600 w-full px-4 border outline-none transition text-sm peer focus:border-2 disabled:opacity-70`,
    error ? 'border-red-500 focus:border-red-500' : 'border-gray-400 focus:border-black',
    as === 'textarea' ? 'min-h-[120px] pt-6 pb-3 rounded-xl resize-none' : 'h-14 pt-6 rounded-xl',
    className
  )

  return (
    <div className={ 'w-full' }>
      <div className={ 'relative' }>
        { as === 'textarea' ? 
        ( 
          <textarea 
            name={ name }
            id={ inputId }
            value={ value }
            placeholder={ ' ' }
            className={ sharedClasses }
            onChange={ onChange }
            { ...props as TextareaHTMLAttributes<HTMLTextAreaElement> }
          /> 
        ) : (
          <input 
            name={ name }
            id={ inputId }
            value={ value }
            placeholder={ ' ' }
            className={ sharedClasses }
            onChange={ onChange }
            { ...props as InputHTMLAttributes<HTMLInputElement> }
          />
        ) }

        <label 
          htmlFor={ inputId }
          className={ clsx( 
            `text-gray-500 text-sm transition-all duration-200 pointer-events-none origin-left absolute top-4 left-4`,
            hasValue ? 'text-gray-700 scale-75 -translate-y-3' : 'peer-focus:text-gray-700 peer-focus:scale-75 peer-focus:-translate-y-3' 
          ) }
        >
          { label }
        </label>
      </div>

      { error && <p className={ 'text-red-500 mt-1 text-xs' }>
        { error }
      </p> }
    </div>
  )
}

export default Input