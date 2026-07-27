import Property from '@/types/property'

interface PropertyCardProps {
  property: Property
}

const PropertyCard = ( { property }:PropertyCardProps ) => {
  return (
    <p 
      className={ '' }
      key={ property.id }
    >
      { property.title }
    </p>
  )
}

export default PropertyCard