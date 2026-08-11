import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins( {
  variable: '--font-poppins',
  subsets: [ 'latin' ],
  weight: [ '300', '400', '500', '600', '700', '800' ]
} )

import LoginModal from '@/components/modals/LoginModal'
import RegisterModal from '@/components/modals/RegisterModal'
import CreatePropertyModal from '@/components/modals/CreatePropertyModal'
import FilterModal from '@/components/modals/FilterModal'

export const metadata: Metadata = {
  title: 'Real estate marketplace',
  description: 'Estate marketplace built with Next.js, Tailwind CSS and TypeScript',
}

const RootLayout = ( {
  children,
}: Readonly<{
  children: React.ReactNode
}> ) => {
  return (
    <html
      lang={ 'en' }
      className={ `${ poppins.className } h-full antialiased` }
    >
      <body 
        className={ 'bg-background min-h-full flex flex-col' }
      >
        { children }
        <RegisterModal />
        <LoginModal />
        <CreatePropertyModal />
      </body>
    </html>
  )
}

export default RootLayout
