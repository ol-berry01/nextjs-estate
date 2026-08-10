interface CounterProps {
  title: string,
  subTitle?: string,
  value: number,
  onChange: ( value: number ) => void,
  min?: number,
  max?: number
}

const Counter = ( { title, subTitle, value, onChange, min = 1, max = 20 }:CounterProps ) => {
  return (
    <div>Counter</div>
  )
}

export default Counter