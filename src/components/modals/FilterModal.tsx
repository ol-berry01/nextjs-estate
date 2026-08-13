'use client'

import { useState } from 'react'
import useFilterModalStore from '@/store/useFilterModalStore'

import propertyTypes from '@/constants/PropertyTypes'

import Modal from './Modal'
import PropertyTypeCard from '../ui/PropertyTypeCard'

const STEPS = {
  TYPE: 0,
  LOCATION: 1,
  PRICING: 2
}

const FilterModal = () => {
  const { close, isOpen } = useFilterModalStore()
  
  const [ step, setStep ] = useState( STEPS.TYPE )
  const [ propertyType, setPropertyType ] = useState( '' )
  const [ location, setLocation ] = useState( '' )
  const [ address, setAddress ] = useState( '' )
  const [ minPrice, setMinPrice ] = useState( '' )
  const [ maxPrice, setMaxPrice ] = useState( '' )

  const stepTitle = () => {
    switch ( step ) {
      case STEPS.TYPE:
        return 'Select property type'
      
      case STEPS.LOCATION:
        return 'Select property location'
      
      case STEPS.PRICING:
        return 'Set property price range'

      default:
        return ''
    }
  }

  return (
    <Modal
      title={ 'Filter properties' }
      onClose={ close }
      isOpen={ isOpen }
    >
      {/* filter modal: header */}
      <div className={ 'text-gray-500 mb-6 text-sm flex justify-between items-center' }>
        <span className={ 'text-primary font-medium' }>
          { stepTitle() }
        </span>
        <span>
            Step { step + 1 } of { Object.keys( STEPS ).length }
        </span>
      </div>

      {/* filter modal: body */}
      <div className={ 'text-gray-400 min-h-55 p-6 border boder-dashed border-gray-300 rounded-xl' }>
        { step === STEPS.TYPE && (
          <div className={ 'w-full max-h-[50vh] overflow-y-scoll no-scrollbar grid grid-cols-2 gap-4' }>
            { propertyTypes.map( ( item ) => (
              <PropertyTypeCard
                key={ item.slug }
                label={ item.label }
                icon={ item.icon }
                selected={ propertyType === item.slug }
                onClick={ () => setPropertyType( item.slug ) }
              />
            ) ) }
          </div>
        ) }
      </div>
    </Modal>
  )
}

export default FilterModal