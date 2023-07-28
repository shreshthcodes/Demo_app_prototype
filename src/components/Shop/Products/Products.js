import React from 'react'
import ProductCard from './ProductCard/ProductCard';
import { faker } from '@faker-js/faker'
import './Product.css'
const Products = () => {
  let productList = [];
  for(let i=0 ; i<36 ;i++){
    productList.push(<ProductCard key={i} pic={faker.image.urlPicsumPhotos({category:"dark", width: 239, height: 325 })}
    itemName= {faker.commerce.productName()} price={faker.commerce.price({ min: 100, max: 200, dec: 0, symbol: '$' })} customerNumber={faker.random.numeric(3)}
    />)
  }
  return (
    <div id='prodList'>{productList}</div>
  )
}

export default Products