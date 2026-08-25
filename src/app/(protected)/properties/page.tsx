import { Suspense } from 'react'
import getUserProperties from '@/server-actions/getUserProperties'

import FrontendLayout from '@/components/layouts/FrontendLayout'
import { Navbar } from '@/components/navbar/Navbar'

import PropertyCard from '@/components/ui/PropertyCard'
import CardSkeleton from '@/components/ui/CardSkeleton'

const PropertiesPage = () => {
  return (
    <FrontendLayout>
      <Navbar 
        variant={ 'solid' }
      />

      <div className="w-full max-w-7xl mx-auto p-6 lg:px-12">
        <div className="flex justify-between">
          <h2 className="text-text text-2xl font-bold md:text-3xl">
            Properties
          </h2>
        </div>

        <Suspense
          fallback={ <CardSkeleton /> }
        >
          <PropertiesContent />  
        </Suspense>
      </div>
    </FrontendLayout>
  )
}

const PropertiesFallback = () => {
  return (
    <div className={ 'w-full h-[50vh] my-10 border border-black/5 rounded-xl flex justify-center items-center' }>
      <p className={ 'text-text' }>No properties found</p>
    </div>
  )
}

const PropertiesContent = async () => {
  const properties = await getUserProperties()

  if ( properties.length === 0 ) {
    return (
      <PropertiesFallback />
    )
  }
  return (
    <div className={ 'my-10 grid md:grid-cols-2 xl:grid-cols-3 gap-8' }>
      { properties.map( ( property ) => (
        <PropertyCard 
          key={ property.id }
          property={ property }
        />
      ) )}
    </div>
  )
}

export default PropertiesPage