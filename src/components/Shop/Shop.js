import React, { useContext, useEffect, useState } from "react";
import logo from "../../Assets/logo.jpg";
import { BiArrowBack } from "react-icons/bi";
import ShopContext from "../../context/ShopContext";
import Search from "../Search_box/Search";
import Filter from "./Filter/Filter";
import Products from "./Products/Products";
import ProductContext from "../../context/ProductContext";
import "./Shop.css";
const Shop = ({ data, shope, setSearchTerm }) => {
  const [shop, setShop] = useContext(ShopContext);
  const [productList, setProductList] = useState(data);
  useEffect(() => {
    console.log(data);
    setProductList(data);
  }, []);
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
            <Search shope={shope} setSearchTerm={setSearchTerm} />
          </div>
          <img
            src={logo}
            alt="logo"
            onClick={() => {
              setShop(false);
            }}
            width="86px"
            height="45px"
          />
        </div>
      </div>
      <div className="below">
        <ProductContext.Provider value={[productList, setProductList]}>
          <div id="filter">
            <Filter data={data} />
          </div>
          <div id="products">
            <Products />
          </div>
        </ProductContext.Provider>
      </div>
    </div>
  );
};

export default Shop;
