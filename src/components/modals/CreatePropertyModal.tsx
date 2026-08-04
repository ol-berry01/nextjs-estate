import Modal from './Modal'

import useCreatePropertyModalStore from '@/store/useCreatePropertyModalStore'

const CreatePropertyModal = () => {
  const  {} = useCreatePropertyModalStore()

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