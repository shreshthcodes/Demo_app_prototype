import React from 'react'
import "./RecommendCard.css"
import { faker } from '@faker-js/faker'
const PopularSuggestions = () => {
  return (
    <div>
        <h3>Popular Suggestions</h3>
        <p className='suggestions'>{faker.commerce.productName() }</p>
        <p className='suggestions'>{faker.commerce.productName() }</p>
        <p className='suggestions'>{faker.commerce.productName() }</p>
        <p className='suggestions'>{faker.commerce.productName() }</p>
        <p className='suggestions'>{faker.commerce.productName() }</p> 
    </div>
  )
}

export default PopularSuggestions