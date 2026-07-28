import Modal from './Modal'

const RegisterModal = () => {
  return (
    <Modal
      isOpen={ false }
      onClose={ false }
      title={ 'Register' }
    >
      <p>Register modal</p>
    </Modal>
  )
}

export default RegisterModal