import { LuMinus, LuPlus } from 'react-icons/lu'

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
    <div className={ 'py-8 border-b flex justify-between items-center gap-8 last:border-b-0' }>
      <div className={ '' }>
        <p className={ 'text-gray-900 font-medium' }>
          {title}
        </p>
        { subTitle && <p className={ 'text-gray-500 text-sm' }>{ subTitle }</p> }
      </div>

      <div className={ 'flex items-center gap-4' }>
        <button
          onClick={ decrease }
          disabled={ min === value }
          className={ 'w-8 h-8 border border-gray-300 rounded-full transition flex justify-center items-center hover:border-black disabled:opacity-30 disabled:cursor-not-allowed' }
        >
          <LuMinus size={ 16 } />
        </button>
        
        <button
          onClick={ increase }
          disabled={ max === value }
          className={ 'w-8 h-8 border border-gray-300 rounded-full transition flex justify-center items-center hover:border-black disabled:opacity-30 disabled:cursor-not-allowed' }
        >
          <LuPlus size={ 16 } />
        </button>
      </div>
    </div>
  )
}

export default Counter