import Image from 'next/image'

import FrontendLayout from '@/components/layouts/FrontendLayout'

const Home = () => {
  return (
    <FrontendLayout>
      <section>
        <Image
          src={ '/images/hero.jpg' }
          alt={ 'Background hero image' }
          fill
          className={ 'object-center object-cover absolute inset-0' }
        />
        <div className={ 'min-h-screen pt-32 lg:lt-36 py-2 relative flex items-center overflow-hidden' }>
        </div>
      </section>
    </FrontendLayout>
  )
}

export default Home
