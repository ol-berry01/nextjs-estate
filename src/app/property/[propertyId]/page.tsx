import FrontendLayout from '@/components/layouts/FrontendLayout'

import { Navbar } from '@/components/navbar/Navbar'

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
            <div>
              <p className={ 'text-primary text-sm font-semibold uppercase tracking-[0.25em]' }>
                For sale
              </p>

              <h2 className="text-text mt-3 text-4xl font-bold md:text-5xl">
                Modern luxury apartment
              </h2>

              <div className="text-neutral-600 my-6 text-sm flex flex-wrap items-center gap-3">
                <div className="px-3 py-1 border border-neutral-200 rounded-full flex items-center gap-2">
                  <FaMapMarkerAlt
                    size={ 16 }
                    className={ 'text-neutral-400' }
                  />
                  <span className="text-neutral-800 font-medium">
                    Manhattan, New York
                  </span>
                </div>
                
                <div className="px-3 py-1 border border-neutral-200 rounded-full flex items-center gap-2">
                  <FaRulerCombined
                    size={ 16 }
                    className={ 'text-neutral-400' }
                  />
                  <span className="text-neutral-800 font-medium">
                    2200m<sup>3</sup>
                  </span>
                </div>
                
                <div className="px-3 py-1 border border-neutral-200 rounded-full flex items-center gap-2">
                  <LuBedDouble
                    size={ 16 }
                    className={ 'text-neutral-400' }
                  />
                  <span className="text-neutral-800 font-medium">
                    7 rooms
                  </span>
                </div>
                
                <div className="px-3 py-1 border border-neutral-200 rounded-full flex items-center gap-2">
                  <LuBath
                    size={ 16 }
                    className={ 'text-neutral-400' }
                  />
                  <span className="text-neutral-800 font-medium">
                    2 baths
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FrontendLayout>
  )
}

export default SingleProperty