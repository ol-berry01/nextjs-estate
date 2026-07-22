'use client'

import { useState } from 'react'
import Link from 'next/link'

import Button from '@/components/ui/Button'

import { FaHome } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'

interface NavbarProps {
  variant?: 'transparent' | 'solid'
}

const navLink = [
  'Home',
  'Properties',
  'MarketPlace'
]

const Navbar = ( { variant = 'transparent' }:NavbarProps ) => {
  const [ isOpen, setIsOpen ] = useState( false )
  const isTransparent = variant === 'transparent'

  return (
    <header className={ `w-full top-0 left-0 z-50 ${ isTransparent ? 'absolute' : 'bg-card sticky border-b border-black/5' }` }>
      <div className={ 'max-w-7xl mx-auto px-6 lg:px-12' }>
        <nav className={ `h-20 flex justify-between items-center ${ isTransparent ? 'bg-white/5 mt-6 px-6 border border-white/10 rounded-3xl backdrop-blur-2xl' : 'px-0' }` }>
          {/* logo */}
          <Link
            href={ '/' }
            className={ 'text-2xl font-semibold flex items-center' }
          >
            <span className={ isTransparent ? 'text-gray-300' : 'text-text' }>
              Next
            </span>
            <span className={ 'bg-primary text-white px-2 py-1 rounded-tr-2xl rounded-bl-2xl' }>
              Estate
            </span>
          </Link>

          {/* desktop links */}
          <div className={ 'hidden lg:flex items-cetner gap-8' }>
            { navLink.map( ( item ) => (
              <Link
                href={ item === 'Home' ? '/' : `${ item.toLowerCase() }` }
                className={ `text-sm hover:text-primary font-medium transition ${ isTransparent ? 'text-white/80' : 'text-text/70' }` }
                key={ item }
              >
                { item }
              </Link>
            ) )}
          </div>

          {/* desktop buttons */}
          <div className={ 'hidden lg:flex items-center gap-4' }>
            <Button 
              variant={ 'outline' } 
              icon={ <FaHome /> }
            >Add property</Button>
            <Button variant={ 'outline' }>Login</Button>
          </div>

          {/* mobile menu buttons */}
          <button 
            className={ 
              `w-11 h-11 rounded-2xl transition flex lg:hidden justify-center items-center 
              ${ 
                isTransparent ? 
                'bg-white/5 text-white border border-white/10' : 
                'bg-background text-text border border-black/10' 
              }` 
            }
            onClick={ () => setIsOpen( ! isOpen ) }
          >
              { 
              isOpen ? 
              <IoClose size={ 24 } /> : 
              <HiOutlineMenuAlt3 size={ 24 } /> }
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar