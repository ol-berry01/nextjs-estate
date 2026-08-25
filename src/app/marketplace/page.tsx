import FrontendLayout from '@/components/layouts/FrontendLayout'
import { Navbar } from '@/components/navbar/Navbar'

import PropertyCard from '@/components/ui/PropertyCard'
import FilterButton from '@/components/ui/FilterButton'

import properties from '@/constants/dummyProperties'

import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

const MarketPlace = () => {
  return (
    <FrontendLayout>
      <Navbar 
        variant={ 'solid' }
      />

      <div className="w-full max-w-7xl mx-auto p-6 lg:px-12">
        <div className="flex justify-between">
          <h2 className="text-text text-2xl font-bold md:text-3xl">
            Explore
          </h2>

          {/* <Button
            variant={ 'outline' }
            icon={ 
              <HiOutlineAdjustmentsHorizontal 
                size={ 20 } 
              /> 
            }
          >
            Filter
          </Button> */}
          <FilterButton />
        </div>

        <div className={ 'my-4 grid md:grid-cols-2 xl:grid-cols-3 gap-8' }>
          { properties.map( ( property ) => (
            <PropertyCard 
              key={ property.id }
             property={ property }
            />
          ) )}
        </div>
      </div>
    </FrontendLayout>
  )
}

export default MarketPlace