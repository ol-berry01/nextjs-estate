'use client'

import useFilterModalStore from '@/store/useFilterModalStore'
import Button from './Button'

import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2'

const FilterButton = () => {
  const { open } = useFilterModalStore()

  return (
    <Button
      variant={ 'outline' }
      icon={ <HiOutlineAdjustmentsHorizontal size={ 20 } /> }
      onClick={ open }
    >
      Filter
    </Button>
  )
}

export default FilterButton