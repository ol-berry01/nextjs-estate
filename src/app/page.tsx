import Image from 'next/image'

import Navbar from '@/components/navbar/Navbar'
import FrontendLayout from '@/components/layouts/FrontendLayout'

const Home = () => {
  return (
    <FrontendLayout>
      <Navbar />
      <section className={ 'relative' }>
        {/* bg image */}
        <Image
          src={ '/images/hero.jpg' }
          alt={ 'Background hero image' }
          fill={ true }
          className={ 'object-center object-cover absolute inset-0' }
        />

        {/* overlay */}
        <div className={ 'bg-black/35 absolute inset-0' }></div>

        {/* gradient */}
        <div className={ 'bg-linear-to-r from-slate-950/50 via-slate-900/40 to-transparent absolute inset-0' }>
        </div>

        {/* content */}
        <div className={ 'max-w-7xl min-h-screen mx-auto pt-26 lg:lt-36 py-2 relative flex items-center overflow-hidden' }>
          {/* content */}
          <div className={ 'relative z-10 w-full' }>
            <div className={ 'wax-w-7xl mx-auto px-6 lg:px-12' }>
              {/* badge */}
              <div className={ 'bg-white/5 mb-6 px-5 py-2 backdrop-blur-xl border border-white/10 rounded-full inline-flex items-center gap-2' }>
                <div className={ 'bg-primary w-2 h-2 rounded-full' }>
                </div>
                <span className={ 'text-white text-sm font-medium tracking-wide'}>
                  Premium real estate marketplace
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FrontendLayout>
  )
}

export default Home
