import { Suspense } from 'react'

import FrontendLayout from '@/components/layouts/FrontendLayout'
import { Navbar } from '@/components/navbar/Navbar'

import MarketplaceItems from '@/components/marketplace/MarketplaceItems'
import FilterButton from '@/components/ui/FilterButton'
import CardSkeleton from '@/components/ui/CardSkeleton'

type MarketPlaceProps = {
  searchParams: Promise<{
    search?: string,
    propertyType?: string,
    location?: string,
    address?: string,
    minPrice?: number,
    maxPrice?: number
  }>
}

const MarketPlace = async ( { searchParams }: MarketPlaceProps ) => {
  const params = await searchParams

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

          <FilterButton />
        </div>

        <Suspense
          fallback={ <CardSkeleton/> }
        >
          <MarketplaceItems 
            searchParams={ params }
          />
        </Suspense>
      </div>
    </FrontendLayout>
  )
}

export default MarketPlace