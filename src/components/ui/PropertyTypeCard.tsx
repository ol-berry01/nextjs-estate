import clsx from 'clsx'

import { IconType } from 'react-icons'
import Button from './Button'

interface PropertyTypeCardProps {
  label: string,
  icon: IconType,
  selected?: boolean,
  onClick: () => void
}

const PropertyTypeCard = ( { label, icon: Icon, selected, onClick }: PropertyTypeCardProps ) => {
  return (
    <Button 
      className={ clsx( 
        ` text-gray-700 p-4 border rounded-xl text-left transition flex flex-col gap-3 hover:border-black`,
        selected ? 'bg-gray-50 border-black' : 'border-gray-200'
      ) }
      variant={ 'outline' }
      type={ 'button' }
      onClick={ onClick}
    >
      <Icon size={ 28 } />
      <span className={ 'font-medium' }>
        { label }
      </span>
    </Button>
  )
}

export default PropertyTypeCard