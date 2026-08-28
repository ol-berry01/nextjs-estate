import { Suspense } from 'react'

import getProperty from '@/server-actions/getProperty'

import FrontendLayout from '@/components/layouts/FrontendLayout'

import { Navbar } from '@/components/navbar/Navbar'
import PropertySkeleton from '@/components/ui/PropertySkeleton'
import EmailForm from '@/components/ui/EmailForm'

import Image from 'next/image'

import { FaMapMarkerAlt, FaRulerCombined } from 'react-icons/fa'
import { LuBedDouble, LuBath } from 'react-icons/lu'


const SingleProperty = async ( { params }: { params: Promise<{ propertyId: string }>} ) => {
  const propertyId = ( await params ).propertyId

  return (
    <FrontendLayout>
      <Navbar
        variant={ 'solid' }
      />

      <Suspense
        fallback={ <PropertySkeleton/> }
      >
        <PropertyContent 
          propertyId={ propertyId }
        />
      </Suspense>
    </FrontendLayout>
  )
}

const formatPrice = ( price: number | string ) => {
  return Number( price).toLocaleString( 'en-GB' )
}

const PropertyContent = async ( { propertyId }: { propertyId: string } ) => {
  const property = await getProperty( propertyId )

  return (
    <section className={ 'py-15' }>
      <div className={ 'max-w-7xl mx-auto px-6 lg:px-12' }>
        <div className={ 'flex flex-col gap-8 lg:flex-row lg:justify-between lg:items-start' }>

          {/* property overview */}
          <div>
            <p className={ 'text-primary text-sm font-semibold uppercase tracking-[0.25em]' }>
              { property?.listingType === 'sale' ? 'For sale' : 'To rent' }
            </p>

            <h2 className={ 'text-text mt-3 text-4xl font-bold md:text-5xl' }>
              { property?.title }
            </h2>

            {/* features */}
            <div className={ 'text-neutral-600 my-6 text-sm flex flex-wrap items-center gap-3' }>
              <div className={ 'px-3 py-1 border border-neutral-200 rounded-full flex items-center gap-2' }>
                <FaMapMarkerAlt
                  size={ 16 }
                  className={ 'text-neutral-400' }
                />
                <span className={ 'text-neutral-800 font-medium' }>
                  { property?.location }
                </span>
              </div>
              
              <div className={ 'px-3 py-1 border border-neutral-200 rounded-full flex items-center gap-2' }>
                <FaRulerCombined
                  size={ 16 }
                  className={ 'text-neutral-400' }
                />
                <span className={ 'text-neutral-800 font-medium' }>
                  { property?.area }m<sup>3</sup>
                </span>
              </div>
              
              <div className={ 'px-3 py-1 border border-neutral-200 rounded-full flex items-center gap-2' }>
                <LuBedDouble
                  size={ 16 }
                  className={ 'text-neutral-400' }
                />
                <span className={ 'text-neutral-800 font-medium' }>
                  { property?.bedrooms } rooms
                </span>
              </div>
              
              <div className={ 'px-3 py-1 border border-neutral-200 rounded-full flex items-center gap-2' }>
                <LuBath
                  size={ 16 }
                  className={ 'text-neutral-400' }
                />
                <span className={ 'text-neutral-800 font-medium' }>
                  { property?.bathrooms } baths
                </span>
              </div>
            </div>

          </div>

          {/* property price */}
          <div className={ 'bg-card border p-6 border-black/5 rounded-[28px] shadow-sm' }>
            <p className={ 'text-text text-sm' }>
              Guide price
            </p>

            <h2 className={ 'text-primary mt-2 text-4xl font-bold' }>
              &pound;{ formatPrice( property?.price || '' ) }
            </h2>
          </div>
        </div>

        <div className={ 'w-full h-60 my-6 relative md:h-100 lg:h-120' }>
          <Image 
            src={ property?.image || '' }
            alt={ 'property' }
            fill
            className={ 'w-full object-cover rounded-2xl shadow-sm' }
          />
        </div>

        <div className={ 'mt-16 grid gap-10 lg:grid-cols-3' }>
          {/* description */}
          <div className={ 'lg:col-span-2' }>
            <div className={ 'bg-card p-8 border border-black/5 rounded-4xl shadow-sm' }>
              <h2 className={ 'text-text text-3xl font-bold' }>
                About this property
              </h2>

              <p className={ 'text-text/70 mt-6 leading-relaxed' }>
                { property?.description }
              </p>
            </div>
          </div>

          {/* contact */}
          <EmailForm />
        </div>
      </div>
    </section>
  )
}

export default SingleProperty