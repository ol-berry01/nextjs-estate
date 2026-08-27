const PropertySkeleton = () => {
  return (
    <section className={ 'bg-background py-15 animate-pulse' }>
      <div className={ 'max-w-7xl mx-auto px-6 lg:px-12' }>
        {/* skeleton: top */}
        <div className={ 'flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between' }>
          {/* skeleton: left */}
          <div className={ 'flex-1' }>
            <div className={ 'bg-black/5 w-28 h-4 rounded-full' } />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PropertySkeleton