interface CounterProps {
  title: string,
  subTitle?: string,
  value: number,
  onChange: ( value: number ) => void,
  min?: number,
  max?: number
}

const Counter = ( { title, subTitle, value, onChange, min = 1, max = 20 }:CounterProps ) => {
  const increase = () => {
    if ( value < max ) onChange( value + 1 )
  }
  const decrease = () => {
    if ( value > min ) onChange( value - 1 )
  }

  return (
    <div>Counter</div>
  )
}

export default Counter