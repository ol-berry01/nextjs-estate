'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'

import Modal from './Modal'
import useAuthModal from '@/store/useAuthModalStore'
import { authClient } from '@/lib/auth-client'
import Input from '../ui/Input'
import Button from '../ui/Button'

import { FcGoogle } from 'react-icons/fc'

interface LoginValues {
  email: string,
  password: string
}

type LoginErrors = Partial<Record<keyof LoginValues, string>>

const LoginModal = () => {
  const router = useRouter()
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

  const onSubmit = async ( e:React.SubmitEvent ) => {
    e.preventDefault()

    if ( ! validate ) return

    try {
      setLoading( true )

      const { error } = await authClient.signIn.email( {
        email: values.email,
        password: values.password
      } )

      if ( error ) {
        toast.error( error.message as string )
        return
      }

      toast.success( 'Login successful' )
      router.refresh()
      setValues( { 
        email: '',
        password: ''
      } )
      closeLogin()
    } catch ( error ) {
      toast.error( error instanceof Error ? error.message : 'Something went wrong, please try again' )
    } finally {
      setLoading( false )
    }
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
      <form onSubmit={ onSubmit } className={ 'space-y-8' }>
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
        Dont&apos;t have an account?{ ' ' }
        <span
          className={ 'text-primary font-semibold cursor-pointer hover:underline' }
          onClick= { openRegister }
        >
          Register
        </span>
      </p>
    </Modal>
  )
}

export default LoginModal