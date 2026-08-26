
import { prisma } from '@/database/db'

const getRecentProperties = async () => {
  try {
    const properties = await prisma.property.findMany( {
      take: 6,
      orderBy: {
        createdAt: 'desc'
      }
    } )

    return properties
  } catch ( error ) {
    console.error( 'Failed to get latest properties' )
    return []
  }
}

export default getRecentProperties