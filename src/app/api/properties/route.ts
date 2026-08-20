import { NextRequest, NextResponse } from 'next/server'

const POST = async ( req: NextRequest ) => {
  try {
    
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