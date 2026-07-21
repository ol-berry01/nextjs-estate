import Link from 'next/link'

interface NavbarProps {
  variant?: 'transparent' | 'solid'
}

const navLink = [
  'Home',
  'Properties',
  'MarketPlace'
]

const Navbar = ( { variant = 'transparent' }:NavbarProps ) => {
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
        </nav>
      </div>
    </header>
  )
}

export default Navbar