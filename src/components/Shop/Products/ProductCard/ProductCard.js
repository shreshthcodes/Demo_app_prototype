import React, { useState } from 'react'
import './ProductCard.css'
// import { faker } from '@faker-js/faker'
import { AiFillStar,AiOutlineHeart,AiFillHeart } from 'react-icons/ai'
const ProductCard = ({pic,itemName,price,customerNumber}) => {
  const [wish,setWish] = useState(false)
  const handleHeart=()=>{
    setWish(true);
  }
  const handleUnheart=()=>{
    setWish(false);
  }
  return (
    <div id='card'>
        <div id='img'>
          <img id='main' src={pic}  alt="product"></img>
          {wish?(<AiFillHeart onClick={handleUnheart} className='heart red'/>):(<AiOutlineHeart onClick={handleHeart} className='heart'/>)}
          <div className='view-product'><p id='vp'>Veiw Product</p></div>
        </div>
        <div id='info'>
          <p id='item-name'>{itemName }</p>
          <p id='price'> {price}</p>
          <div id='ratings'>
            <div id='star'>
            <AiFillStar className="yellow"/>
            <AiFillStar className="yellow"/>
            <AiFillStar className="yellow"/>
            <AiFillStar className="yellow"/>
            <AiFillStar className="yellow"/>
            </div>
            <div id='customer-number'>{`(${customerNumber})`}</div>
          </div>
        </div>
    </div>
  )
}

export default ProductCard