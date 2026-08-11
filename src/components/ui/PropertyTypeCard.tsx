import clsx from 'clsx'

import { IconType } from 'react-icons'

interface PropertyTypeCardProps {
  label: string,
  icon: IconType,
  selected?: boolean,
  onClick: () => void
}

const PropertyTypeCard = ( { label, icon: Icon, selected, onClick }: PropertyTypeCardProps ) => {
  return (
    <button 
      className={ clsx( 
        `text-gray-700 p-4 border rounded-xl text-left transition flex flex-col gap-3 hover:bg-primary/5 hover:text-primary hover:border-primary cursor-pointer`,
        selected ? 'bg-primary/5 text-primary border-primary' : 'border-gray-200'
      ) }
      type={ 'button' }
      onClick={ onClick}
    >
      <Icon size={ 28 } />
      <span className={ 'font-medium' }>
        { label }
      </span>
    </button>
  )
}

export default PropertyTypeCard