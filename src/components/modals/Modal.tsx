import { useEffect } from 'react'

interface ModalProps {
  isOpen: boolean,
  onClose: () => void,
  title: string,
  children: React.ReactNode
}

const Modal = ( { isOpen, onClose, title, children } : ModalProps ) => {
  useEffect( () => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [ isOpen ] )
  return (
    <div>Modal</div>
  )
}

export default Modal