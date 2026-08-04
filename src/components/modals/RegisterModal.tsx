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
    const newErrors: RegisterErrors = {}

    // validate the name
    if ( ! values.name.trim() ) {
      newErrors.name = 'Name is required'
    } else if ( values.name.length < 2 ) {
      newErrors.name = 'Enter a valid name with atleast 2 characters'
    }
    
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
      isOpen={ isRegisterOpen }
      onClose={ closeRegister }
      title={ 'Register' }
    >
      <p>Register modal</p>
    </Modal>
  )
}

export default RegisterModal