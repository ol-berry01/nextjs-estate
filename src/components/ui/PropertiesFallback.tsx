'use client'

import { useRouter } from 'next/navigation'

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
      <h2 className={ 'text-text mt-6 text-2xl font-bold' }>
        { title }
      </h2>
      <p className={ 'text-text' }>
        No properties found
      </p>
    </div>
  )
}

export default PropertiesFallback