import PropertyCard from '@/components/ui/PropertyCard'

import properties from '@/constants/dummyProperties'

const Marketplace = () => {
  return (
    <div className={ 'my-4 grid md:grid-cols-2 xl:grid-cols-3 gap-8' }>
      { properties.map( ( property ) => (
        <PropertyCard 
          key={ property.id }
          property={ property }
        />
      ) )}
    </div>
  )
}

export default Marketplace