'use client'

import FrontendLayout from '@/components/layouts/FrontendLayout'
import { Navbar } from '@/components/navbar/Navbar'

import MarketplaceItems from '@/components/marketplace/MarketplaceItems'
import FilterButton from '@/components/ui/FilterButton'

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

        <MarketplaceItems />
      </div>
    </FrontendLayout>
  )
}

export default MarketPlace