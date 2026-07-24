const RecentProperties = () => {
  return (
    <section className={ 'py-24' }>
      <div className={ 'max-w-7xl mx-auto px-6 lg:px-12' }>
        {/* header */}
        <div className={ 'max-w-2xl' }>
          <p className={ 'text-primary mb-3 text-sm font-semibold uppercase tracking-[0.25em' }>
            New Listings
          </p>
        </div>

        <h2 className={ 'text-text text-3xl font-bold md:text-4xl' }>
          Discover recently added properties
        </h2>
      </div>
    </section>
  )
}

export default RecentProperties