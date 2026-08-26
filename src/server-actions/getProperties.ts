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

  } catch (error) {
    throw new Error( 'Failed to fetch properties', { cause: error } )
  }
}

export { getProperties }
export type { GetPropertiesParams }