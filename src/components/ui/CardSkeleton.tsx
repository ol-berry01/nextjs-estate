const CardSkeleton = () => {
  return (
    <div className={ 'my-6 grid gap-8 md:grid-cols-2 xl:grid-cols-3'}>
      { Array.from( { length: 6 } ).map( ( _, index ) => (
        <div 
          key={ index }
          className={ 'bg-black h-105 rounded-3xl animate-pulse' } 
        />
      ) ) }
    </div>
  )
}

export default CardSkeleton