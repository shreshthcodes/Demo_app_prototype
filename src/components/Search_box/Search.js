import React from 'react'
import {CiSearch} from 'react-icons/ci';
import './Search.css'
function Search({recommendation,shope,setSearchTerm}) {
  const handleKeyDown= (event) => {
    if (event.keyCode === 13) {
      // This is the Enter key code
      shope();
    }
  };
  return (
    <div className="input-wrapper" onClick={recommendation}>
        <input  placeholder='Search' onChange={(e)=>{setSearchTerm(e.target.value)}} onKeyDown={(e)=>handleKeyDown(e)}></input>
        <CiSearch id='search-icon' onClick={shope}/>
    </div>
  )
}

export default Search