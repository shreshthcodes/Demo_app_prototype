import React, { useContext } from "react";
import ProductCard from "./ProductCard/ProductCard";
import ProductContext from "../../../context/ProductContext";

import "./Product.css";
const Products = () => {
  const [productList, setProductList] = useContext(ProductContext);

  return (
    <div id="prodList">
      {productList.length === 0 ? (
        <div id="no-result">
          <h1>No Results</h1>
        </div>
      ) : (
        productList.map((data, index) => (
          <ProductCard
            key={index}
            pic={data.pic}
            itemName={data.itemName}
            price={data.price}
            customerNumber={data.customerNumber}
          />
        ))
      )}
    </div>
  );
};

export default Products;
