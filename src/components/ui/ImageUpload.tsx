import Image from 'next/image'

import { TbPhonePlus } from 'react-icons/tb'

interface ImageUploadProps {
  preview: string | null,
  onChange: ( file:File ) => void
}

const ImageUpload = ( { preview, onChange }: ImageUploadProps ) => {
  const handleUpload = ( e:React.ChangeEvent<HTMLInputElement> ) => {
    const file = e.target.files?.[0]

    if ( ! file ) return

    onChange( file )
  }

  return (
    <div className={ 'w-full relative' }>
      <label 
        htmlFor={ 'image-upload' }
        className={ 'text-gray-600 min-h-80 border-2 border-dashed border-gray-300 rounded-2xl cursor-pointer transition relative flex flex-col justify-center items-center gap-2 hover:text-primary hover:border-primary'}
      >
        { ! preview && (
          <>
            <TbPhonePlus 
              size={ 36} 
            />
            <p className={ 'font-medium' }>
              Click to upload
            </p>
            <p className={ 'text-sm' }>
              Upload one image
            </p>
          </>
        ) }

        { preview && (
          <Image 
            src={ preview }
            alt={ 'Preview' }
            fill
            className={ 'object-cover rounded-2xl' }
          />
        ) }
      </label>

      <input 
        type={ 'file' }
        id={'image-upload' }
        accept={ 'images/*' }
        onChange={ handleUpload }
        className={ 'hidden' }
      />
    </div>
  )
}

export default ImageUpload