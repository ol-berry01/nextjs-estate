'use client'

import { useState } from 'react'

import Modal from './Modal'
import useAuthModal from '@/store/useAuthModalStore'
import Input from '../ui/Input'
import Button from '../ui/Button'

interface LoginValues {
  email: string,
  password: string
}

type LoginErrors = Partial<Record<keyof LoginValues, string>>

const LoginModal = () => {
  const { openRegister, isLoginOpen, closeLogin } = useAuthModal()
  const [ loading, setLoading ] = useState( false )
  const [ values, setValues ] = useState<LoginValues>( {
    email: '',
    password: '',
  } )
  const [ errors, setErrors ] = useState<LoginErrors>( {} )

  const handleChange = ( e:React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target

    setValues( ( prev ) => ( {
      ...prev,
      [ name ]:value
    } ) )

    setErrors( ( prev ) => ( {
      ...prev,
      [ name ]: undefined
    } ) )
  }

  const validate = () => {
    const newErrors: LoginErrors = {}

    // validate the email
    if ( ! values.email.trim() ) {
      newErrors.email = 'Email is required'
    } else if ( ! /^\S+@\S+\.\S+$/.test( values.email ) ) {
      newErrors.email = 'Enter a valid email address'
    }

    // validate the password
    if ( ! values.password.trim() ) {
      newErrors.password = 'Password is required'
    } else if ( values.password.length < 6 ) {
      newErrors.password = 'Enter a valid password with at least 6 characters'
    }

    setErrors( newErrors )
    return Object.keys( newErrors ).length === 0
  }

  return (
    <Modal
      isOpen={ isLoginOpen }
      onClose={ closeLogin }
      title={ 'Login' }
    >
      <div className={ 'mb-6 space-y-1' }>
        {/* header */}
        <h2 className={ 'text-gray-900 text-2xl font-semibold' }>
          Welcome back
        </h2>
        <p className={ 'text-gray-500 text-sm' }>
          Login to your account to continue
        </p>
      </div>

      {/* form */}
      <form action="" className="space-y-8">
        <Input 
          id={ 'login-email' }
          name={ 'email' }
          label={ 'Email' }
          value={ values.email }
          onChange={ handleChange }
          error={ errors.email }
          disabled={ loading }
        />
        <Input 
          id={ 'login-password' }
          name={ 'password' }
          label={ 'Password' }
          value={ values.password }
          onChange={ handleChange }
          error={ errors.password }
          disabled={ loading }
        />
        <Button>
          Continue
        </Button>
      </form>
    </Modal>
  )
}

export default LoginModal