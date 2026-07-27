type Property = {
  id: string
  title: string
  location: string
  price: number
  type: string
  status: string
  bedrooms: number
  bathrooms: number
  area: number
  featured: boolean
  image: string
  description: string
}

const properties: Property[] = [
  {
    id: '1',
    title: 'Modern luxury apartment',
    location: 'Manhattan, New York',
    price: 2500,
    type: 'Apartment',
    status: 'rend',
    bedrooms: 4,
    bathrooms: 3,
    area: 2200,
    featured: true,
    image: '/iamges/image1.jpg',
    description: 'A stunning luxury apartment with moder interiors, spacious rooms and homely charm.'
  },
  {
    id: '2',
    title: 'Contemporary Family Villa',
    location: 'Beverly Hills, Los Angeles',
    price: 850000,
    type: 'Villa',
    status: 'sale',
    bedrooms: 5,
    bathrooms: 4,
    area: 4500,
    featured: true,
    image: '/images/image2.jpg',
    description: 'Beautiful contemporary villa with elegant architecture and large gardens.'
  },
  {
    id: '3',
    title: 'Skyline Penthouse Suite',
    location: 'Miami, Florida',
    price: 12000,
    type: 'Penthouse',
    status: 'rent',
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    featured: true,
    image: '/images/image3.jpg',
    description: 'Stunning penthouse with panoramic ocean views, floor-to-ceiling windows, and a private rooftop terrace perfect for entertaining.'
  },
  {
    id: '4',
    title: 'Cozy Suburban Home',
    location: 'Austin, Texas',
    price: 420000,
    type: 'House',
    status: 'sale',
    bedrooms: 3,
    bathrooms: 2,
    area: 1600,
    featured: true,
    image: '/images/image4.jpg',
    description: 'Charming family home in a quiet neighborhood with a spacious backyard, modern kitchen, and excellent school district.'
  },
  {
    id: '5',
    title: 'Downtown Artist Loft',
    location: 'Chicago, Illinois',
    price: 3200,
    type: 'Loft',
    status: 'rent',
    bedrooms: 2,
    bathrooms: 1,
    area: 1100,
    featured: true,
    image: '/images/image5.jpg',
    description: 'Industrial-chic loft in the heart of downtown with exposed brick walls, high ceilings, and breathtaking city skyline views.'
  },
  {
    id: '6',
    title: 'Beachfront Luxury Condo',
    location: 'Malibu, California',
    price: 1200000,
    type: 'Condo',
    status: 'sale',
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    featured: true,
    image: '/images/image6.jpg',
    description: 'Exquisite beachfront condo with direct ocean access, premium finishes, a gourmet kitchen, and a spacious private balcony.'
  },
]

export default properties