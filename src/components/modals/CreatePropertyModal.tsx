'use client'

import Modal from './Modal'

import useCreatePropertyModalStore from '@/store/useCreatePropertyModalStore'

const CreatePropertyModal = () => {
  const  { isOpen, close } = useCreatePropertyModalStore()

  return (
    <Modal
      title={ 'Create a new listing' }
      isOpen={ isOpen }
      onClose={ close }
    >
      <CreatePropertyModal />
    </Modal>
  )
}

export default CreatePropertyModal