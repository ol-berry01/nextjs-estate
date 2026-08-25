import { redirect } from 'next/navigation'

import getCurrentUser from '@/server-actions/getCurrentUser'

const ProtectedLayout = async ( {
  children,
}: Readonly<{
  children: React.ReactNode
}> ) => {
  const user = await getCurrentUser()

  if ( ! user ) {
    redirect( '/' )
  }
  return (
    <>
      { children }
    </>
  )
}

export default ProtectedLayout