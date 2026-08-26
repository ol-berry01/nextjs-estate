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
    console.log(error)
  }
}

export { getProperties }
export type { GetPropertiesParams }