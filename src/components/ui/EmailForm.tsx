'use client'

import { useState } from 'react'
import Image from 'next/image'

import Input from './Input'
import Button from './Button'

import { LuSend } from 'react-icons/lu'

interface InputValues {
  email: string,
  name: string,
  phone: string,
  message: string
}

const EmailForm = () => {
  const [ values, setValues ] = useState<InputValues>( {
    email: '',
    name: '',
    phone: '',
    message: ''
  } )

  const handleChange = ( e:React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target

    setValues( ( prev ) => ( {
      ...prev,
      [ name ]:value
    } ) )
  }

  return (
    <div>
      <div className={ 'bg-card p-8 border border-black/5 rounded-4xl shadow-sm sticky top-28' }>
        <div className={ 'flex items-center gap-4' }>
          <Image 
            src={ '/images/avatar.png' }
            alt={ 'User' }
            width={ 50 }
            height={ 50 }
            className={ 'object-cover rounded-full' }
          />

          <div>
            <h3 className={ 'text-text text-xl font-bold' }>
              Sarah Johnson
            </h3>

            <p className={ 'text-text/60' }>
              Property agent
            </p>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <Input
            onChange={ handleChange }
            id={ 'contact-name' }
            label={ 'Your name' }
            name={ 'name' }
            value={ values.name }
            />
          <Input
            onChange={ handleChange }
            id={ 'contact-email' }
            label={ 'Your email' }
            name={ 'email' }
            value={ values.email }
            />
          <Input
            onChange={ handleChange }
            id={ 'contact-phone' }
            label={ 'Your phone' }
            name={ 'phone' }
            value={ values.phone }
            />
          <Input
            onChange={ handleChange }
            id={ 'contact-message' }
            label={ 'Your message' }
            name={ 'message' }
            value={ values.message }
            as={ 'textarea' }
            />
        </div>

        <Button
          fullWidth={ true }
          icon={ <LuSend /> }
          className={ 'mt-2' }

        >
          Send email
        </Button>
      </div>
    </div>
  )
}

export default EmailForm