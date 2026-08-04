'use client'

import { useState } from 'react'
import Input from '../ui/Input'
import Button from '../ui/Button'

import Modal from './Modal'
import useAuthModal from '@/store/useAuthModalStore'

import { FcGoogle } from 'react-icons/fc'

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
      {/* header */}
      <div className={ 'mb-6 space-y-1' }>
        <h2 className={ 'text-gray-900 text-2xl font-semibold' }>
          Create an account
        </h2>
        <p className={ 'text-gray-500 text-sm' }>
          Fill in your details to create a new account
        </p>
      </div>

      {/* form */}
      <form action="" className="space-y-8">
        <Input 
          id={ 'login-name' }
          name={ 'name' }
          label={ 'Name' }
          value={ values.name }
          onChange={ handleChange }
          error={ errors.name }
          disabled={ loading }
        />
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
        <Button
          type={ 'submit' }
          fullWidth={ true }
        >
          Continue
        </Button>
      </form>

      {/* divider */}
      <div className={ 'my-6 relative'}>
        <div className={ 'absolute inset-0 flex items-center'}>
          <div className={ 'w-full border-t border-gray-300' } />
        </div>
        <div className="text-xs uppercase relative flex justify-center">
          <span className="bg-white text-gray-500 px-4">
            Or
          </span>
        </div>
      </div>
      
      <Button
        variant={ 'outline' }
        icon={ <FcGoogle size={ 22 } />}
        disabled={ loading }
        fullWidth={ true }
      >
        Continue with Google
      </Button>

      <p className="text-gray-400 mt-6 text-sm text-center">
        Already have an account?{ ' ' }
        <span
          className={ 'text-primary font-semibold cursor-pointer hover:underline' }
          onClick= { openLogin }
        >
          Login
        </span>
      </p>
    </Modal>
  )
}

export default RegisterModal