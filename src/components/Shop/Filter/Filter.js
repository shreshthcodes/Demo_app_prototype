import React from "react";
import './Filter.css'
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
const Filter = () => {
  return (
    <div className="filter-container">
      <h2 id="title">Search Results</h2>
      <br></br>
      <div className="brand">
        <h3>BRAND</h3>
        <div className="flexy">
          <input className="check-box" type="checkbox" />
          <label>Mango</label>
        </div>
        <div className="flexy">
          <input className="check-box" type="checkbox" />
          <label>H&M</label>
        </div>
      </div>
      <br/>
      <hr/>
      <div className="price-range">
      <h3>PRICE RANGE</h3>
      <div className="flexy">
          <input className="check-box" type="checkbox" />
          <label>Under 500</label>
        </div>
        <div className="flexy">
          <input className="check-box" type="checkbox" />
          <label>1000 To 3000</label>
        </div>
      </div>
      <br/>
      <hr/>
      <div className="ratings">
      <h3>RATINGS</h3>
      <div className="flexy">
          <input className="check-box" type="checkbox" />
          <label>
            <AiFillStar className="yellow"/>
            <AiFillStar className="yellow"/>
            <AiFillStar className="yellow"/>
            <AiFillStar className="yellow"/>
            <AiFillStar className="yellow"/>
          </label>
        </div>
      <div className="flexy">
          <input className="check-box" type="checkbox" />
          <label>
            <AiFillStar className="yellow"/>
            <AiFillStar className="yellow"/>
            <AiFillStar className="yellow"/>
            <AiFillStar className="yellow"/>
            <AiOutlineStar/>
          </label>
        </div>
      <div className="flexy">
          <input className="check-box" type="checkbox" />
          <label>
            <AiFillStar className="yellow"/>
            <AiFillStar className="yellow"/>
            <AiFillStar className="yellow"/>
            <AiOutlineStar/>
            <AiOutlineStar/>
          </label>
        </div>
      <div className="flexy">
          <input className="check-box" type="checkbox" />
          <label>
            <AiFillStar className="yellow"/>
            <AiFillStar className="yellow"/>
            <AiOutlineStar/>
            <AiOutlineStar/>
            <AiOutlineStar/>
          </label>
        </div>
      <div className="flexy">
          <input className="check-box" type="checkbox" />
          <label>
            <AiFillStar className="yellow"/>
            <AiOutlineStar/>
            <AiOutlineStar/>
            <AiOutlineStar/>
            <AiOutlineStar/>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
