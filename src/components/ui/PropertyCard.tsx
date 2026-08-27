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
      <div className={ 'w-full h-full relative' }>
        <Image
          src={ property.image }
          alt={ property.title }
          fill
          className={ 'object-cover inset-0 transition duration-700 group-hocer:scale-110' }
        />

        {/* dark overlay */}
        <div className={ 'bg-linear-to-t from-black/90 via-black/20 to-transparent absolute inset-0' }>
          {/* top badge */}
          <div className={ 'bg-white/80 text-primary px-4 py-2 rounded-full text-sm font-semibold absolute top-5 left-5 z-20' }>
            { property.listingType === 'rent' ? 'To let' : 'For sale' }
          </div>

          {/* content card */}
          <div className={ 'bg-white/10 border border-white/10 p-5 rounded-[28px] backdrop-blur-2xl absolute right-5 bottom-5 left-5 z-20' }>
            <div className={ 'flex justify-between items-start gap-4' }>
              <div className={ '' }>
                { 
                  property.listingType === 'rent' ? 
                  (
                    <h3 className={ 'text-white text-3xl flex items-center' }>
                      £{ property.price.toLocaleString() }
                      <span className={ 'text-white ml-1 text-sm' }>
                        / Month
                      </span>
                    </h3>
                  ) :
                  (
                    <h3 className={ 'text-white text-3xl' }>
                      £{ property.price.toLocaleString() }
                    </h3>
                  )
                }

                <p className={ 'text-white mt-1 text-sm' }>
                  { property.location }
                </p>
              </div>

              <div className={ 'bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium capitalize' }>
                { property.propertyType }
              </div>
            </div>

            <h2 className={ 'text-white mt-5 text-xl font-bold' }>
              { property.title }
            </h2>

            {/* listing features */}
            <div className={ 'mt-5 pt-5 border-t border-white/10 flex flex-wrap gap-3' }>
              <div className={ 'bg-white/10 text-white px-4 py-2 rounded-full text-sm' }>
                { property.bedrooms } Beds
              </div>
              <div className={ 'bg-white/10 text-white px-4 py-2 rounded-full text-sm' }>
                { property.bathrooms } Bath
              </div>
              <div className={ 'bg-white/10 text-white px-4 py-2 rounded-full text-sm' }>
                { property.area }m<sup>3</sup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PropertyCard