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

const useAuthModal = create<AuthModalStore>( ( set ) => ( {} ) )

export default useAuthModal