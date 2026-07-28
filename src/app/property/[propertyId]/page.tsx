import FrontendLayout from '@/components/layouts/FrontendLayout'

import { Navbar } from '@/components/navbar/Navbar'
import EmailForm from '@/components/ui/EmailForm'

import Image from 'next/image'

import { FaMapMarkerAlt, FaRulerCombined } from 'react-icons/fa'
import { LuBedDouble, LuBath } from 'react-icons/lu'


const SingleProperty = () => {
  return (
    <FrontendLayout>
      <Navbar
        variant={ 'solid' }
      />

      <section className={ 'py-15' }>
        <div className={ 'max-w-7xl mx-auto px-6 lg:px-12' }>
          <div className={ 'flex flex-col gap-8 lg:flex-row lg:justify-between lg:items-start' }>

            {/* property overview */}
            <div>
              <p className={ 'text-primary text-sm font-semibold uppercase tracking-[0.25em]' }>
                For sale
              </p>

              <h2 className={ 'text-text mt-3 text-4xl font-bold md:text-5xl' }>
                Modern luxury apartment
              </h2>

              {/* features */}
              <div className={ 'text-neutral-600 my-6 text-sm flex flex-wrap items-center gap-3' }>
                <div className={ 'px-3 py-1 border border-neutral-200 rounded-full flex items-center gap-2' }>
                  <FaMapMarkerAlt
                    size={ 16 }
                    className={ 'text-neutral-400' }
                  />
                  <span className={ 'text-neutral-800 font-medium' }>
                    Manhattan, New York
                  </span>
                </div>
                
                <div className={ 'px-3 py-1 border border-neutral-200 rounded-full flex items-center gap-2' }>
                  <FaRulerCombined
                    size={ 16 }
                    className={ 'text-neutral-400' }
                  />
                  <span className={ 'text-neutral-800 font-medium' }>
                    2200m<sup>3</sup>
                  </span>
                </div>
                
                <div className={ 'px-3 py-1 border border-neutral-200 rounded-full flex items-center gap-2' }>
                  <LuBedDouble
                    size={ 16 }
                    className={ 'text-neutral-400' }
                  />
                  <span className={ 'text-neutral-800 font-medium' }>
                    7 rooms
                  </span>
                </div>
                
                <div className={ 'px-3 py-1 border border-neutral-200 rounded-full flex items-center gap-2' }>
                  <LuBath
                    size={ 16 }
                    className={ 'text-neutral-400' }
                  />
                  <span className={ 'text-neutral-800 font-medium' }>
                    2 baths
                  </span>
                </div>
              </div>

            </div>

            {/* property price */}
            <div className={ 'bg-card border p-6 border-black/5 rounded-[28px] shadow-sm' }>
              <p className={ 'text-text text-sm' }>
                Guide price
              </p>

              <h2 className={ 'text-primary mt-2 text-4xl font-bold' }>
                &pound;2,500,000
              </h2>
            </div>
          </div>

          <div className={ 'w-full h-60 my-6 relative md:h-100 lg:h-120' }>
            <Image 
              src={ '/images/image1.jpg' }
              alt={ 'property' }
              fill
              className={ 'w-full object-cover rounded-2xl shadow-sm' }
            />
          </div>

          <div className={ 'mt-16 grid gap-10 lg:grid-cols-3' }>
            {/* description */}
            <div className={ 'lg:col-span-2' }>
              <div className={ 'bg-card p-8 border border-black/5 rounded-4xl shadow-sm' }>
                <h2 className={ 'text-text text-3xl font-bold' }>
                  About this property
                </h2>

                <p className={ 'text-text/70 mt-6 leading-relaxed' }>
                  Experience luxury living in this modern apartment located in one of the most desirable neighbourhoods in the city. Feating spacious interiors, premium finishes, floor-to-ceiling windows and world class amenities.
                </p>
              </div>
            </div>

            {/* contact */}
            <EmailForm />
          </div>
        </div>
      </section>
    </FrontendLayout>
  )
}

export default SingleProperty