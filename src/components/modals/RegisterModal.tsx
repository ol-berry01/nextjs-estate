import Modal from './Modal'
import useAuthModal from '@/store/useAuthModalStore'

const RegisterModal = () => {
  const { openLogin, isRegisterOpen, closeRegister } = useAuthModal()

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