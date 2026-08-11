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
    <div>ImageUpload</div>
  )
}

export default ImageUpload