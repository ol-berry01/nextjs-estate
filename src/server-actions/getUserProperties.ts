import { prisma } from '@/database/db'
import getCurrentUser from './getCurrentUser'

const getUserProperties = async () => {
  try {
    const currentUser = await getCurrentUser()

    if ( ! currentUser?.id ) {
      return []
    }

    const properties = await prisma.property.findMany( {
      where: { ownerId: currentUser.id }
    } )
  } catch ( error ) {
    console.error( 'Failed to fetch properties', error )
    return []
  }
}

export default getUserProperties