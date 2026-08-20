import { NextRequest, NextResponse } from 'next/server'

import getCurrentUser from '@/server-actions/getCurrentUser'

const POST = async ( req: NextRequest ) => {
  try {
    const currentUser = await getCurrentUser()

    if ( ! currentUser ) {
      return NextResponse.json( 
        {
          error: 'Unauthorised' 
        },
        {
          status: 401
        }
      )
    }

    const formData = await req.formData()

    const title = formData.get( 'title' ) as string
    const price = formData.get( 'price' ) as string
    const description = formData.get( 'description' ) as string
    const propertyType = formData.get( 'propertyType' ) as string
    const listingType = formData.get( 'listingType' ) as string
    const bedrooms = formData.get( 'bedrooms' ) as string
    const bathrooms = formData.get( 'bathrooms' ) as string
    const parkingSpaces = formData.get( 'parkingSpaces' ) as string
    const location = formData.get( 'location' ) as string
    const address = formData.get( 'address' ) as string
    const area = formData.get( 'area' ) as string
    const image = formData.get( 'image' ) as File
  } catch (error) {
    console.log( error )

    return NextResponse.json(
      {
        error: 'Something went wrong',
      },
      {
        status: 500
      }
    )
  }
}

export default POST