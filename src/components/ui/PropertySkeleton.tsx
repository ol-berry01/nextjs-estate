const PropertySkeleton = () => {
  return (
    <section className={ 'bg-background py-15 animate-pulse' }>
      <div className={ 'max-w-7xl mx-auto px-6 lg:px-12' }>
        {/* skeleton: top */}
        <div className={ 'flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between' }>
          {/* skeleton: left */}
          <div className={ 'flex-1' }>
            <div className={ 'bg-black/5 w-28 h-4 rounded-full' } />

            <div className={ 'bg-black/5 w-full max-w-xl h-12 mt-4 rounded-2xl' } />

            <div className={ 'my-6 flex flex-wrap gap-3' }>
              { Array.from( ( { length : 4 } ) ).map( ( _, index ) => (
                <div
                  key={ index}
                  className={ 'bg-black/5 w-28 h-10 rounded-full' }
                />
              ) ) }
            </div>
          </div>

          {/* skeleton: price */}
          <div className={ 'bg-card p-6 border border-black/5 rounded-[28px] shadow-sm' }>
              <div className={ 'bg-black/5 w-24 h-4 rounded' } />
              <div className={ 'bg-black/5 w-40 h-10 mt-3 rounded' } />
          </div>
        </div>

        {/* skeleton: image */}
        <div className={ 'bg-black/5 w-full h-60 my-6 rounded-2xl relative md:h-100 lg:h-120' } />

        {/* skeleton: bottom */}
        <div className={ 'mt-16 grid gap-10 lg:grid-cols-3' }>
          {/* skeleton: description */}
          <div className={ 'lg:col-span-2' }>
            <div className={ 'bg-card p-8 border border-black/5 rounded-4xl shadow-sm' }>
              <div className={ 'bg-black/5 w-64 h-10 rounded' } />
              <div className={ 'mt-8 space-y-4' }>
                <div className={ 'bg-black/5 w-full h-4 rounded' } />
                <div className={ 'bg-black/5 w-full h-4 rounded' } />
                <div className={ 'bg-black/5 w-full h-4 rounded' } />
                <div className={ 'bg-black/5 w-5/6 h-4 rounded' } />
                <div className={ 'bg-black/5 w-3/4 h-4 rounded' } />
              </div>
            </div>
          </div>

          {/* skeleton: agent card */}
          <div className={ 'bg-card p-6 border border-black/5 rounded-4xl shadow-sm' }>
            <div className={ 'flex items-center gap-4' }>
              <div className={ 'bg-black/5 w-16 h-16 rounded-full' } />

              <div className={ 'flex-1' }>
                <div className={ 'bg-black/5 w-32 h-5 rounded' } />
                <div className={ 'bg-black/5 w-40 h-4 mt-2 rounded' } />
              </div>

              <div className={ 'mt-6 space-y-3' }>
                <div className={ 'bg-black/5 h-12 rounded-2xl' } />
                <div className={ 'bg-black/5 h-12 rounded-2xl' } />
                <div className={ 'bg-black/5 h-12 rounded-2xl' } />
                <div className={ 'bg-black/5 h-12 rounded-2xl' } />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PropertySkeleton