import FrontendLayout from '@/components/layouts/FrontendLayout'

import { Navbar } from '@/components/navbar/Navbar'

const SingleProperty = () => {
  return (
    <FrontendLayout>
      <Navbar
        variant={ 'solid' }
      />

      <section className={ 'py-15' }>
        <div className={ 'max-w-7xl mx-auto px-6 lg:px-12' }>
          <div className={ 'flex flex-col gap-8 lg:flex-row lg:justify-between lg:items-start' }>

          </div>
        </div>
      </section>
    </FrontendLayout>
  )
}

export default SingleProperty