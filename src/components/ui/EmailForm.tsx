import { useState } from 'react'

interface InputValues {
  email: string,
  name: string,
  phone: string,
  message: string
}

const EmailForm = () => {
  const [ values, setValues ] = useState<InputValues>( {
    email: '',
    name: '',
    phone: '',
    message: ''
  } )

  return (
    <div>EmailForm</div>
  )
}

export default EmailForm