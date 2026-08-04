import Modal from './Modal'

const CreatePropertyModal = () => {
  return (
    <Modal
      title={ 'Create a new listing' }
      isOpen={ false }
      onClose={ () => {} }
    >
      <p>Create property modal</p>
    </Modal>
  )
}

export default CreatePropertyModal