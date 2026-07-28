interface ModalProps {
  isOpen: boolean,
  onClose: () => void,
  title: string,
  children: React.ReactNode
}

const Modal = ( { isOpen, onClose, title, children } : ModalProps ) => {
  return (
    <div>Modal</div>
  )
}

export default Modal