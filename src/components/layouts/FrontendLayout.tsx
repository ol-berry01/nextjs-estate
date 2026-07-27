import Footer from '@/components/footer/Footer'

const FrontendLayout = ( { children }: { children: React.ReactNode } ) => {
  return (
    <>
      { children }
      
      <Footer />
    </>
  )
}

export default FrontendLayout