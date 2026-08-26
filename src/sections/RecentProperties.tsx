import getRecentProperties from '@/server-actions/getRecentProperties'

import PropertyCard from '@/components/ui/PropertyCard'

const RecentProperties = async () => {
  return (
    <section className={ 'py-24' }>
      <div className={ 'max-w-7xl mx-auto px-6 lg:px-12' }>
        {/* header */}
        <div className={ 'max-w-2xl' }>
          <p className={ 'text-primary mb-3 text-sm font-semibold uppercase tracking-[0.25em' }>
            New Listings
          </p>
          
          <h2 className={ 'text-text text-3xl font-bold md:text-4xl' }>
            Discover recently added properties
          </h2>

          <p className={ 'text-text/60 mt-5 text-md leading-relaxed' }>
            Browse the latest homes, apartments, villas and investment opportunities added to our marketplace by trusted property ownsers and agents
          </p>
        </div>

        {/* properties grid */}
        
      </div>
    </section>
  )
}

const RecentPropertiesItems = async () => {
  const properties = await getRecentProperties()
  
  return (
    <div className={ 'my-6 grid md:grid-cols-2 xl:grid-cols-3 gap-8' }>
      { properties.map( ( property ) => (
        <PropertyCard 
          key={ property.id }
          property={ property }
        />
      ) ) }
    </div>
  )
}

export default RecentProperties