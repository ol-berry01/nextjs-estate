interface NavbarProps {
  variant: 'transparent' | 'solid'
}

const Navbar = ( { variant = 'transparent' }:NavbarProps ) => {
  return (
    <div>Navbar</div>
  )
}

export default Navbar