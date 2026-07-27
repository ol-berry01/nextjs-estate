import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={ 'bg-background border-t border-black/5' }>
      <div className={ 'max-w-7xl mx-auto p-6 lg:px-12 flex flex-col justify-between items-center gap-4 lg:flex-row' }>
        {/* logo */}
          <Link
            href={ '/' }
            className={ 'text-2xl font-semibold flex items-center' }
          >
            <span className={ 'text-text' }>
              Next
            </span>
            <span className={ 'bg-primary text-white px-2 py-1 rounded-tr-2xl rounded-bl-2xl' }>
              Estate
            </span>
          </Link>
      </div>
    </footer>
  )
}

export default Footer 