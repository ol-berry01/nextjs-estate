'use client'

import Link from 'next/link'

import { navLinks } from '../navbar/Navbar'

const Footer = () => {
  return (
    <footer className={ 'bg-background border-t border-black/5' }>
      <div className={ 'max-w-7xl mx-auto p-6 lg:px-12 flex flex-col justify-between items-center gap-4 lg:flex-row' }>
        {/* logo */}
          <Link
            href={ '/' }
            className={ 'text-2xl font-semibold flex items-center' }
          >
            <span className={ 'text-text' }>
              Next
            </span>
            <span className={ 'bg-primary text-white px-2 py-1 rounded-tr-2xl rounded-bl-2xl' }>
              Estate
            </span>
          </Link>

          {/* desktop links */}
          <div className={ 'flex items-cetner gap-8' }>
            { navLinks.map( ( item ) => (
              <Link
                href={ item === 'Home' ? '/' : `${ item.toLowerCase() }` }
                className={ 'text-sm hover:text-primary font-medium transition text-text/70' }
                key={ item }
              >
                { item }
              </Link>
            ) )}
          </div>

          <p className="text-text text-sm">
            &copy; { new Date().getFullYear() } NextEstates
          </p>
      </div>
    </footer>
  )
}

export default Footer 