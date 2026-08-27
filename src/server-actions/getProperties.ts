import axios from 'axios'

interface GetPropertiesParams {
  search?: string,
  propertyType?: string,
  location?: string,
  address?: string,
  minPrice?: number,
  maxPrice?: number
}

const getProperties = async ( params?: GetPropertiesParams ) => {
  try {
    const { data } = await axios.get( 
      `${ process.env.NEXT_PUBLIC_BASE_URL }/api/properties`,
      {
        params: {
          search: params?.search,
          propertyType: params?.propertyType,
          location: params?.location,
          address: params?.address,
          minPrice: params?.minPrice,
          maxPrice: params?.maxPrice
        }
      }
    )

    return data
  } catch (error) {
    throw new Error( 'Failed to fetch properties', { cause: error } )
  }
}

export { getProperties }
export type { GetPropertiesParams }