import { useEffect } from 'react'

import { LuX } from 'react-icons/lu'

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
      
      {/* modal body */}
      <div 
        className={
          `
            bg-white w-full max-w-lg rounded-2xl shadow-2xl transition-all duration-500 relative z-10
            ${ isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full' }
          `
        }
      >

        {/* modal header */}
        <div className={ 'px-6 py-4 border-b border-gray-300 flex justify-between items-center' }>
          <h2 className={ 'text-gray-900 text-lg font-semibold' }>
            { title }
          </h2>
          <button
            aria-label={ 'Close modal' }
            onClick={ onClose }
            className={ 'p-2 rounded-full transition cursor-pointer hover:bg-gray-100' }
          >
            <LuX
              size={ 18 }
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal