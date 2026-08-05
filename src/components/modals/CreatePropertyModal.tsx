'use client'

import useCreatePropertyModalStore from '@/store/useCreatePropertyModalStore'

import Modal from './Modal'

const CreatePropertyModal = () => {
  const { isOpen, close } = useCreatePropertyModalStore()

  return (
    <Modal
      title={ 'Create a new listing' }
      isOpen={ isOpen }
      onClose={ close }
    >
      <p>Create Property Modal</p>
    </Modal>
  )
}

export default CreatePropertyModal
