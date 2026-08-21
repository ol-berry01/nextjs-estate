import cloudinary from '../lib/cloudinary'

export type CloudinaryUploadResult = {
  secure_url: string
  public_id: string
}

const uploadToCloudinary = async ( file: File ): Promise<CloudinaryUploadResult> => {}

export default uploadToCloudinary