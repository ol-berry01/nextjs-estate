import { authClient } from '@/lib/auth-client'
import { toast } from 'react-hot-toast'

const signInWithGoogle = async () => {
  try {
    await authClient.signIn.social( {
      provider: 'google'
    })
  } catch ( error ) {
    toast.error( 'Google sign in failed' )
    console.log( error )
  }
}

export default signInWithGoogle