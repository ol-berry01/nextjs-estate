import { FaHome, FaStore, FaWarehouse } from 'react-icons/fa'
import { LuBuilding, LuBuilding2, LuLandPlot, LuHotel, LuTrees, LuHousePlus } from 'react-icons/lu'

const propertyTypes = [
  {
    labe: 'House',
    icon: FaHome,
    slug: 'house'
  },
  {
    label: 'Apartment',
    icon: LuBuilding,
    slug: 'apartment'
  },
  {
    label: 'Townhouse',
    icon: LuTrees,
    slug: 'townhouse'
  },
  {
    label: 'Villa',
    icon: LuHousePlus,
    slug: 'villa'
  },
  {
    labe: 'Penthouse',
    icon: LuBuilding2,
    slug: 'penthouse'
  },
  {
    label: 'Hotel',
    icon: LuHotel,
    slug: 'hotel'
  },
  {
    label: 'Office',
    icon: LuBuilding2,
    slug: 'office'
  },
  {
    labe: 'Warehouse',
    icon: FaWarehouse,
    slug: 'warehouse'
  },
  {
    label: 'Commercial',
    icon: FaStore,
    slug: 'commercial'
  },
  {
    label: 'Land',
    icon: LuLandPlot,
    slug: 'land'
  }
]

export default propertyTypes