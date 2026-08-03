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