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
  const [ step, setStep ] = useState( STEPS.TYPE )
  const { isOpen, close } = useCreatePropertyModalStore()

  const stepTitle = () => {
    switch ( step ) {
      case STEPS.TYPE:
        return 'Select property type'
      
      case STEPS.LOCATION:
        return 'Set the property location'
      
      case STEPS.DETAILS:
        return 'Share some property details'
      
      case STEPS.FEATURES:
        return 'Highlight some property features'
      
      case STEPS.IMAGE:
        return 'Upload property image'
      
      case STEPS.PRICING:
        return 'Set property price'

      default:
        return ''
    }
  }

  return (
    <Modal
      title={ 'Create a new listing' }
      isOpen={ isOpen }
      onClose={ close }
    >
      <div className={ 'text-gray-500 mb-6 text-sm flex justify-between items-center' }>
        <span className={ 'text-primary font-medium' }>
          { stepTitle() }
        </span>
        <span>
            Step { step + 1 } of { Object.keys( STEPS ).length }
        </span>
      </div>
    </Modal>
  )
}

export default CreatePropertyModal
