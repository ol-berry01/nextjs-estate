import getCurrentUser from '@/server-actions/getCurrentUser'

const ProtectedLayout = async ( {
  children,
}: Readonly<{
  children: React.ReactNode
}> ) => {
  await getCurrentUser()
  return (
    <>
      { children }
    </>
  )
}

export default ProtectedLayout