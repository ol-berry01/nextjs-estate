import cloudinary from '../lib/cloudinary'

export type CloudinaryUploadResult = {
  secure_url: string
  public_id: string
}

const uploadToCloudinary = async ( file: File ): Promise<CloudinaryUploadResult> => {
  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from( bytes )
  const base64 = buffer.toString( 'base64' )
  const dataUrl = `data:${ file.type };base64,${ base64 }`

  try {
    
  } catch (error) {
    
  }
}

export default uploadToCloudinary