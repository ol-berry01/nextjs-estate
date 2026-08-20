import { toast } from 'react-hot-toast'

const signInWithGoogle = async () => {
  try {
    
  } catch ( error ) {
    toast.error( 'Google sign in failed' )
    console.log( error )
  }
}

export default signInWithGoogle