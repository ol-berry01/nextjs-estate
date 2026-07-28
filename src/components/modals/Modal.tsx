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
    <div 
      aria-hidden={ isOpen }
      className={ 
        `
          px-4 transition-opacity duration-500 fixed inset-0 flex justify-center items-center z-50 
          ${ isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none' }
        `
      }
    >
      {/* modal backdrop */}
      <div
        className={ 
          `
            bg-black transition-all duration-500 absolute inset-0
            ${ isOpen ? 'opacity-100' : 'opacity-0' }
          ` 
        } 
        onClick={ onClose }
      />
    </div>
  )
}

export default Modal