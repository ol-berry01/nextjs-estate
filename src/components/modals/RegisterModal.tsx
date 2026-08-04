'use client'

import { useState } from 'react'

import Modal from './Modal'
import useAuthModal from '@/store/useAuthModalStore'

interface RegisterValues {
  name: string,
  email: string,
  password: string
}

type RegisterErrors = Partial<Record<keyof RegisterValues, string>>

const RegisterModal = () => {
  const { openLogin, isRegisterOpen, closeRegister } = useAuthModal()
  const [ loading, setLoading ] = useState( false )
  const [ values, setValues ] = useState<RegisterValues>( {
    name: '',
    email: '',
    password: '',
  } )
  const [ errors, setErrors ] = useState<RegisterErrors>( {} )

  return (
    <Modal
      isOpen={ isRegisterOpen }
      onClose={ closeRegister }
      title={ 'Register' }
    >
      <p>Register modal</p>
    </Modal>
  )
}

export default RegisterModal