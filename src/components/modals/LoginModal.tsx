'use client'

import Modal from './Modal'
import useAuthModal from '@/store/useAuthModalStore'

interface LoginValues {
  emaail: string,
  password: string
}

type LoginErrors = Partial<Record<keyof LoginValues, string>>

const LoginModal = () => {
  const { openRegister, isLoginOpen, closeLogin } = useAuthModal()

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