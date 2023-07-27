import React, { useContext } from 'react'
import RecommendCard from './RecommendCard/RecommendCard'
import {AiOutlineClose} from 'react-icons/ai'
import './Recommend.css'
import PopularSuggestions from './RecommendCard/PopularSuggestions'
import RecommendationContext from '../../context/RecommendationContext'
const Recommend = () => {
    const[recommendation,setRecommendation]=useContext(RecommendationContext)
  return (
    <div className='recommend-container'>
       <div className='top'> <h3>Latest Trends</h3>
        <AiOutlineClose id='close' onClick={()=>setRecommendation(false)}/>   
       </div>
        <div id='flexy'>
       <RecommendCard/>
       <RecommendCard/>
       <RecommendCard/>
       <RecommendCard/>
       <RecommendCard/>
       </div>
        <PopularSuggestions/>
    </div>
  )
}

export default Recommend