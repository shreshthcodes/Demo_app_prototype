import React, { useContext } from "react";
import "./Shop.css";
import { BiArrowBack } from "react-icons/bi";
import ShopContext from "../../context/ShopContext";
import Search from "../Search_box/Search";
import Filter from "./Filter/Filter";
import Products from "./Products/Products";
const Shop = ({shope,setSearchTerm}) => {
  const [shop, setShop] = useContext(ShopContext);
  return (
    <div className="shop">
      <div className="header">
        <span id="back">
          <BiArrowBack
            onClick={() => {
              setShop(false);
            }}
          />
        </span>
        <div id="title-bar">
        <div className="search-bar">
          <Search shope={shope} setSearchTerm={setSearchTerm}/>
        </div>
          <img src="./logo.jpg" alt="logo" width="86px" height="45px" />
        </div>
      </div>
      <div className="below">
       <div id="filter">
         <Filter/>
       </div>
       <div id="products">
        <Products/>
       </div>
      </div>
    </div>
  );
};

export default Shop;
