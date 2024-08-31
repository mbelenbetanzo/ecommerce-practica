
import ProductCard from "../Card";
import React from "react";
import { getProductsDB } from "@/helpers/products.helper";
import Link from "next/link";

const ProductsComponent = async () => {
  const products = await getProductsDB();
    return(
      <>
        {products && products?.map((product)=> {
          return (
            <Link href={`/productos/${product.id}`} key={product.id}>
            <ProductCard {...product} key={product.id}  />
            </Link>
          )
})}
     
      </>
    )
}

export default ProductsComponent;