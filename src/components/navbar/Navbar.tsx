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

        </nav>
      </div>
    </header>
  )
}

export default Navbar