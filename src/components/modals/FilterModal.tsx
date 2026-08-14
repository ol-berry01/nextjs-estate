'use client'

import { useState } from 'react'
import useFilterModalStore from '@/store/useFilterModalStore'

import propertyTypes from '@/constants/PropertyTypes'

import Button from '../ui/Button'
import Input from '../ui/Input'
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

  const applyFilter = () => {}

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
        {/* flter modal: location */}
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

        {/* filter modal: location */}
        { step === STEPS.LOCATION && (
          <div className=" w-full space-y-6">
            <Input
              name={ 'location' }
              label={ 'Location' }
              value={ location }
              onChange={ ( e: React.ChangeEvent<HTMLInputElement> ) => setLocation( e.target.value ) }
            />
            <Input
              name={ 'address' }
              label={ 'Address' }
              value={ address }
              onChange={ ( e: React.ChangeEvent<HTMLInputElement> ) => setAddress( e.target.value ) }
            />
          </div>
        ) }

        {/* filter modal: pricing */}
        { step === STEPS.PRICING && (
          <div className={ 'grid grid-cols-2 gap-4' }>
            <div>
              <Input 
                label={ 'Min price' }
                name={ 'min-price' }
                type={ 'number' }
                value={ minPrice }
                onChange={ ( e: React.ChangeEvent<HTMLInputElement> ) => setMinPrice( e.target.value ) }
              />
            </div>
            <div>
              <Input 
                label={ 'Max price' }
                name={ 'max-price' }
                type={ 'number' }
                value={ maxPrice }
                onChange={ ( e: React.ChangeEvent<HTMLInputElement> ) => setMaxPrice( e.target.value ) }
              />
            </div>
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
          onClick={ () => step < STEPS.PRICING ? setStep( ( prev ) => prev + 1 ) : applyFilter() }
        >
          { step < STEPS.PRICING ? 'Next' : 'Apply filter' }
        </Button>
      </div>
    </Modal>
  )
}

export default FilterModal