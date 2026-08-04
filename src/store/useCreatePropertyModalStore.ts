import { create } from 'zustand'

interface CreatePropertyModalStore {
  isOpen: boolean,
  open: () => void,
  close: () => void
}

const useCreatePropertyModalStore = create<CreatePropertyModalStore>( ( set ) => ( {
  isOpen: false,
  open: () => set( { isOpen: true } ),
  close: () => set( { isOpen: false } )
} ) )

export default useCreatePropertyModalStore