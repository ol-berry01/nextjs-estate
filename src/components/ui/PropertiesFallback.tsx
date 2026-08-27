'use client'

import { useRouter } from 'next/navigation'

import Button from './Button'

import { HiOutlineHomeModern } from 'react-icons/hi2'

interface PropertiesFallbackProps {
  title: string,
  subTitle?: string,
  filter?: boolean
}

const PropertiesFallback = ( { title, subTitle, filter }: PropertiesFallbackProps ) => {
  const router = useRouter()
  return (
    <div className={ 'w-full h-[50vh] my-10 border border-black/5 rounded-xl flex flex-col justify-center items-center' }>
      <HiOutlineHomeModern
        size={ 40 }
        className={ 'text-primary' }
      />
      <h2 className={ 'text-text mt-6 text-xl font-bold' }>
        { title }
      </h2>
      { subTitle && (
        <p className={ 'text-text mt-3 leading-relaxed' }>
          { subTitle }
        </p>
      ) }

      { filter && (
        <div className="mt-8">
          <Button
            variant={ 'outline' }
            onClick={ () => router.replace( '/marketplace' ) }
          >
            Clear Filters
          </Button>
        </div>
      ) }
    </div>
  )
}

export default PropertiesFallback