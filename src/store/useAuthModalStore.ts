import { create } from 'zustand'

interface AuthModalStore {
  isLoginOpen: boolean
  isRegisterOpen: boolean
  
  openLogin: () => void
  closeLogin: () => void
  openRegister: () => void
  closeRegister: () => void
  closeAll: () => void
}

const useAuthModal = create<AuthModalStore>( ( set ) => ( {
  isLoginOpen: false
  isRegisterOpen: false

  openLogin: () => 
    set( {
      isLoginOpen: true,
      isRegisterOpen: false
    } )

  closeLogin: () =>
    set( {
      isLoginOpen: false,
    })

  openRegister: () =>
    set( {
      isRegisterOpen: true,
      isLoginOpen: false
    })

  closeRegister: () =>
    set( {
      isRegisterOpen: false
    } )
  } ) 
)

export default useAuthModal