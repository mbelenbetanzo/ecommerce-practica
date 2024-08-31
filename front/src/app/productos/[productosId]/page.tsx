
import ProductDetail from '@/components/ProductDetail/ProductDetail'
import { getProductsById } from '@/helpers/products.helper'
import React from 'react'

const ProductosId = async ({params}: {params: {productosId: string}}) => {
   const product = await getProductsById(params.productosId)  
  return (
    <ProductDetail {...product}/>
  )
}

export default ProductosId;