import useFilterModalStore from '@/store/useFilterModalStore'

import Modal from './Modal'

const FilterModal = () => {
  const { close, isOpen } = useFilterModalStore()

  return (
    <Modal
      title={ 'Filter properties' }
      onClose={ close }
      isOpen={ isOpen }
    >
      FilterModal
    </Modal>
  )
}

export default FilterModal