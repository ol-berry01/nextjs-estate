'use client'

import { useState } from 'react'

import axios from 'axios'
import { toast } from 'react-hot-toast'

import useCreatePropertyModalStore from '@/store/useCreatePropertyModalStore'
import propertyTypes from '@/constants/PropertyTypes'

import PropertyTypeCard from '@/components/ui/PropertyTypeCard'

import Modal from './Modal'
import Input from '../ui/Input'
import Counter from '../ui/Counter'
import Button from '../ui/Button'
import ImageUpload from '../ui/ImageUpload'

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
  const [ propertyType, setPropertyType ] = useState( '' )
  const [ location, setLocation ] = useState( '' )
  const [ address, setAddress ] = useState( '' )
  const [ bedrooms, setBedrooms ] = useState( 1 )
  const [ bathrooms, setBathrooms ] = useState( 1 )
  const [ parkingSpaces, setParkingSpaces ] = useState( 0 )
  const [ area, setArea ] = useState( '' )
  const [ title, setTitle ] = useState( '' )
  const [ description, setDescription ] = useState( '' )
  const [ image, setImage ] = useState<null | File>( null )
  const [ preview, setPreview ] = useState<null | string>( null )
  const [ listingType, setListingType ] = useState<'rent' | 'sale'>( 'sale' )
  const [ price, setPrice ] = useState( '' )


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

  const handleImageChange = ( file: File ) => {
    setImage( file )
    setPreview( URL.createObjectURL( file ) )
  }

  const createListing = async () => {
    try {
      setLoading( true )

      const formData = new FormData()

      formData.append( 'title', title )
      formData.append( 'description', description )
      formData.append( 'price', price )
      formData.append( 'location', location )
      formData.append( 'address', address )
      formData.append( 'area', area )
      formData.append( 'propertyType', propertyType )
      formData.append( 'listingType', listingType )
      formData.append( 'bedrooms', bedrooms.toString() )
      formData.append( 'bathrooms', bathrooms.toString() )
      formData.append( 'parkingSpaces', parkingSpaces.toString() )
      formData.append( 'price', price.toString() )

      if ( image ) {
        formData.append( 'image', image )
      }

      await axios.post( '/api/properties', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      } )

      toast.success( 'Property created' )
    } catch (error) {
      if ( axios.isAxiosError( error ) ) {
        toast.error( error.response?.data.error || 'Something went wrong' )
        return
      }
    } finally {
      setLoading( false )
    }
  }

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
        
        {/* step: property type */}
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

        {/* step: location */}
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

        {/* step: details */}
        { step === STEPS.DETAILS && (
          <div className="w-full space-y-4">
            <Counter 
              title={ 'Bedrooms' }
              subTitle={ 'How many bedrooms' }
              value={ bedrooms }
              onChange={ setBedrooms }
              min={ 1 }
              />
            <Counter 
              title={ 'Bathrooms' }
              subTitle={ 'How many bathrooms' }
              value={ bathrooms }
              onChange={ setBathrooms }
              min={ 1 }
              />
            <Counter 
              title={ 'Parking spaces' }
              subTitle={ 'How many parking spaces' }
              value={ parkingSpaces }
              onChange={ setParkingSpaces }
              min={ 0 }
            />

            <Input 
              name={ 'area' }
              label={ 'Property area (sq metres)' }
              type={ 'number' }
              value={ area }
              onChange={ ( e: React.ChangeEvent<HTMLInputElement> ) => setArea( e.target.value ) }
            />
          </div>
        ) }

        {/* step: features */}
        { step === STEPS.FEATURES && (
          <div className="space-y-6">
            <Input 
              name={ 'title' }
              label={ 'Property title' }
              value={ title }
              onChange={ ( e: React.ChangeEvent<HTMLInputElement> ) => setTitle( e.target.value ) }
            />
            <Input 
              name={ 'description' }
              label={ 'Property description' }
              value={ description }
              onChange={ ( e: React.ChangeEvent<HTMLInputElement> ) => setDescription( e.target.value ) }
            />
          </div>
        ) }
        
        {/* step: image */}
        { step === STEPS.IMAGE && (
          <div className="space-y-6">
            <ImageUpload 
              preview={ preview }
              onChange={ handleImageChange }
            />
          </div>
        ) }

        {/* step: pricing */}
        { step === STEPS.PRICING && (
          <div className="space-y-6">
            <select 
              value={ listingType } 
              onChange={ ( e ) => setListingType( e.target.value as 'sale' | 'rent' ) }
              className={ 'w-full h-13 px-4 border border-black/10 rounded-2xl' }
              name="" 
              id=""
            >
              <option value={ 'rent' }>For rent</option>
              <option value={ 'sale' }>For sale</option>
            </select>

            <Input 
              name={ 'price' }
              label={  listingType === 'sale' ? 'Property price' : 'Monthly price' }
              type={ 'number' }
              value={ price }
              onChange={ ( e: React.ChangeEvent<HTMLInputElement> ) => setPrice( e.target.value ) }
            />
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
