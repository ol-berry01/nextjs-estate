const ProtectedLayout = ( {
  children,
}: Readonly<{
  children: React.ReactNode
}> ) => {
  return (
    <>
      { children }
    </>
  )
}

export default ProtectedLayout