import Button from '@/components/ui/Button'

const SearchBox = () => {
  return (
    <div className={ 'bg-white/10 mt-10 p-4 border border-white/10 rounded-[30px] shadow-2xl backdrop-blur-2xl' }>
      <div className={ 'flex flex-col gap-4 lg:flex-row' }>
        <input 
          type={ 'text' }
          id={ '' } 
          name={ '' }
          placeholder={ 'Search by city, neighbourhood or address' }
          className={ 'bg-white/5 text-white placeholder:text-white/50 w-full h-14 px-5 py-4 border border-white/10 rounded-2xl outline-non transition focus:border-primary/40 flex-1' }
        />
        <Button>Search properties</Button>
      </div>
    </div>
  )
}

export default SearchBox