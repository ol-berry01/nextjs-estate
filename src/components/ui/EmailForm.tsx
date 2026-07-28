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

  const handleChange = ( e:React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target

    setValues( ( prev ) => ( {
      ...prev,
      [ name ]:value
    }) )
  }

  return (
    <div>EmailForm</div>
  )
}

export default EmailForm