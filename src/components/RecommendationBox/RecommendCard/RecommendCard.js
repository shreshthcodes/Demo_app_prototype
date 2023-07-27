import React from 'react'
import { faker } from '@faker-js/faker'
import './RecommendCard.css'
const RecommendCard = () => {
  const val = faker.lorem.sentence({ min: 2, max: 2 }).slice(0,-1);
  return (
    <div className='card'>
        <img src={faker.image.urlLoremFlickr({ category: 'human', width:'165', height:'223' })} alt="clothes"  width= "165px" height="223px" />
        <p>{val}</p>
    </div>
  )
}
export default RecommendCard