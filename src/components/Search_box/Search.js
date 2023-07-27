import React from 'react'
import {CiSearch} from 'react-icons/ci';
import './Search.css'
function Search({recommendation}) {
  return (
    <div className="input-wrapper" onClick={recommendation}>
        <input  placeholder='Search'></input>
        <CiSearch id='search-icon'/>
    </div>
  )
}

export default Search