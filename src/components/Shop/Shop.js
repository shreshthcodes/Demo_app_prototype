import React, { useContext } from "react";
import "./Shop.css";
import { BiArrowBack } from "react-icons/bi";
import ShopContext from "../../context/ShopContext";
import Search from "../Search_box/Search";
const Shop = ({setSearchTerm}) => {
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
          <Search setSearchTerm={setSearchTerm}/>
        </div>
          <img src="./logo.jpg" alt="logo" width="86px" height="45px" />
        </div>
      </div>
    </div>
  );
};

export default Shop;
