import { IconType } from 'react-icons'

interface PropertyTypeCardProps {
  label: string,
  icon: IconType,
  selected?: boolean,
  onClick: () => void
}

const PropertyTypeCard = ( { label, icon: Icon, selected, onClick }: PropertyTypeCardProps ) => {
  return (
    <p>Property Card</p>
  )
}

export default PropertyTypeCard