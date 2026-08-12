'use client'

import Button from './Button'

import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2'

const FilterButton = () => {
  return (
    <Button
      variant={ 'outline' }
      icon={ <HiOutlineAdjustmentsHorizontal size={ 20 } /> }
    >
      Filter
    </Button>
  )
}

export default FilterButton