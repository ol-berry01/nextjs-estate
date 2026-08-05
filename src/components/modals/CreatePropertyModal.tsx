'use client'

import { useState } from 'react'

import useCreatePropertyModalStore from '@/store/useCreatePropertyModalStore'

import Modal from './Modal'
import Button from '../ui/Button'

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
  const [ loading, setLoading ] = useState( false )
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

  const createListing = () => {}

  return (
    <Modal
      title={ 'Create a new listing' }
      isOpen={ isOpen }
      onClose={ close }
    >
      {/* modal header */}
      <div className={ 'text-gray-500 mb-6 text-sm flex justify-between items-center' }>
        <span className={ 'text-primary font-medium' }>
          { stepTitle() }
        </span>
        <span>
            Step { step + 1 } of { Object.keys( STEPS ).length }
        </span>
      </div>

      {/* modal body */}
      <div className={ 'text-gray-400 min-h-55 p-6 border boder-dashed border-gray-300 rounded-xl' }>
        { step === STEPS.TYPE && (
          <div className={ 'w-full max-h-[50vh] overflow-y-scoll no-scrollbar grid grid-cols-2 gap-4' }>
              
          </div>
        ) }
      </div>

      {/* buttons */}
      <div className={ "mt-8 flex justify-between gap-3"}>
        { step > STEPS.TYPE && (
          <Button
          variant={ 'outline' }
          onClick={ () => setStep( 
            ( prev ) => prev - 1 ) 
          }
          >
            Back
          </Button>
        ) }

        <Button
          className={ 'ml-auto' }
          onClick={ () => step < STEPS.PRICING ? setStep( ( prev ) => prev + 1 ) : createListing() }
          loading={ loading }
        >
          { step < STEPS.PRICING ? 'Next' : 'Create' }
        </Button>
      </div>
    </Modal>
  )
}

export default CreatePropertyModal
