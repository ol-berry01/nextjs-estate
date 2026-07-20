import Image from 'next/image'

import FrontendLayout from '@/components/layouts/FrontendLayout'

const Home = () => {
  return (
    <FrontendLayout>
      <section>
        {/* bg image */}
        <Image
          src={ '/images/hero.jpg' }
          alt={ 'Background hero image' }
          fill
          className={ 'object-center object-cover absolute inset-0' }
        />

        {/* overlay */}
        <div className={ 'bg-black/35 absolute inset-0' }></div>

        {/* gradient */}
        <div className="bg-linear-to-r from-slate-950/50 via-slate-900/40 to-transparent absolute inset-0"></div>

        {/* content */}
        <div className={ 'min-h-screen pt-32 lg:lt-36 py-2 relative flex items-center overflow-hidden' }>
        </div>
      </section>
    </FrontendLayout>
  )
}

export default Home
