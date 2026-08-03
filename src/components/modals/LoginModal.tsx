'use client'

import { useState } from 'react'

import Modal from './Modal'
import useAuthModal from '@/store/useAuthModalStore'

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
  }

  return (
    <Modal
      isOpen={ isLoginOpen }
      onClose={ closeLogin }
      title={ 'Login' }
    >
      <p>Login modal</p>
    </Modal>
  )
}

export default LoginModal