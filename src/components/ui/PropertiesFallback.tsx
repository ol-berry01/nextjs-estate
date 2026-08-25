interface PropertiesFallbackProps {
  title: string,
  subTitle?: string,
  filter?: boolean
}

const PropertiesFallback = ( { title, subTitle, filter }: PropertiesFallbackProps ) => {
  return (
    <div className={ 'w-full h-[50vh] my-10 border border-black/5 rounded-xl flex justify-center items-center' }>
      <p className={ 'text-text' }>
        No properties found
      </p>
    </div>
  )
}

export default PropertiesFallback