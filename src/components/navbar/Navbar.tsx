interface NavbarProps {
  variant: 'transparent' | 'solid'
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
      Navbar
    </header>
  )
}

export default Navbar