'use client'

import Modal from './Modal'
import useAuthModal from '@/store/useAuthModalStore'

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