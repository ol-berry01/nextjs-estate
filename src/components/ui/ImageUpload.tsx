interface ImageUploadProps {
  preview: string | null,
  onChange: ( file:File ) => void
}

const ImageUpload = () => {
  const handleUpload = ( e:React.ChangeEvent<HTMLInputElement> ) => {
    const file = e.target.files?.[0]
  }

  return (
    <div>ImageUpload</div>
  )
}

export default ImageUpload