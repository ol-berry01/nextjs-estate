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