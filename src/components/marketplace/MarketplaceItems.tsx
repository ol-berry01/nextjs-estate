import { getProperties } from '@/server-actions/getProperties'
import Property from '@/types/property'

import PropertyCard from '@/components/ui/PropertyCard'
import PropertiesFallback from '@/components/ui/PropertiesFallback'

interface MarketplaceItemsProps {
  searchParams: {
    search?: string,
    propertyType?: string,
    location?: string,
    address?: string,
    minPrice?: number,
    maxPrice?: number
  }
}

const MarketplaceItems = async ( { searchParams }: MarketplaceItemsProps ) => {
  const properties: Property[] = await getProperties( {
    search: searchParams.search,
    propertyType: searchParams.propertyType,
    location: searchParams.location,
    address: searchParams.address,
    minPrice: searchParams.minPrice,
    maxPrice: searchParams.maxPrice
    
  })

  if ( properties.length === 0 ) {
    return (
      <PropertiesFallback 
        title={ 'No matching properties' }
        subTitle={ 'Please adjust your search criteria or clear some filters to see more results' }
        filter={ true }
      />
    )
  }
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

export default MarketplaceItems