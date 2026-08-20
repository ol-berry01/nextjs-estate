import auth from '@/lib/auth'
import { headers } from 'next/headers'

const getCurrentUser = async () => {
  const session = await auth.api.getSession( {
    headers: await headers()
  } )

  if ( ! session?.user.id ) {
    return null
  }
}

export default getCurrentUser