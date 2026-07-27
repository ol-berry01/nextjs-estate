import Link from 'next/link'
import Image from 'next/image'

import Property from '@/types/property'

interface PropertyCardProps {
  property: Property
}

const PropertyCard = ( { property }:PropertyCardProps ) => {
  return (
    <Link
      href={ `/property/${ property.id }`}
      className= { 'h-125 rounded-4xl relative group overflow-hidden'}
      key={ property.id }
    >
      <div className="w-full h-full relative">
        <Image
          src={ property.image }
          alt={ property.title }
          fill
          className={ 'object-cover inset-0 transition duration-700 group-hocer:scale-110' }
        />

        {/* dark overlay */}
        <div className="bg-linear-to-t from-black/90 via-black/20 to-transparent absolute inset-0">
          {/* top badge */}
          <div className="bg-white/80 text-primary px-4 py-2 rounded-full text-sm font-semibold absolute top-5 left-5 z-20">
            { property.status === 'rent' ? 'To let' : 'For sale' }
          </div>
        </div>
      </div>
      <p 
        className={ '' }
      >
        { property.title }
      </p>
    </Link>
  )
}

export default PropertyCard