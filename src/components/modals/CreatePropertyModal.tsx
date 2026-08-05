'use client'

import { useState } from 'react'

import useCreatePropertyModalStore from '@/store/useCreatePropertyModalStore'

import Modal from './Modal'

const STEPS = {
  TYPE: 0,
  LOCATION: 1,
  DETAILS: 2,
  FEATURES: 3,
  IMAGE: 4,
  PRICING: 5
}

const CreatePropertyModal = () => {
  const [ steps, setSteps ] = useState( STEPS.TYPE )
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
