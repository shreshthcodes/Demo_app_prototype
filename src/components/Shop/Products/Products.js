import React, { useContext, useEffect} from "react";
import ProductCard from "./ProductCard/ProductCard";
import { faker } from "@faker-js/faker";
import ProductContext from "../../../context/ProductContext";
import "./Product.css";
const Products = () => {
  const [productList,setProductList] = useContext(ProductContext)
  const handleProds = () => {
    const product = [];
    for (let i = 0; i < 12; i++) {
      product.push({
        pic: faker.image.urlPicsumPhotos({
          category: "dark",
          width: 239,
          height: 325,
        }),
        itemName: faker.commerce.productName(),
        price: faker.commerce.price({
          min: 300,
          max: 1200,
          dec: 0,
          symbol: "Rs.",
        }),
        customerNumber: faker.random.numeric(3),
      });
    }
    setProductList(product);
  };
  useEffect(() => {
    handleProds();
  }, []);
  // for(let i=0 ; i<12 ;i++){
  //   productList.push(<ProductCard key={i} pic={faker.image.urlPicsumPhotos({category:"dark", width: 239, height: 325 })}
  //   itemName= {faker.commerce.productName()} price={faker.commerce.price({ min: 300, max: 1200, dec: 0, symbol: 'Rs.' })} customerNumber={faker.random.numeric(3)}
  //   />)
  return (
    <div id="prodList">
      {productList.map((data, index) => (
        <ProductCard
          key={index}
          pic={data.pic}
          itemName={data.itemName}
          price={data.price}
          customerNumber={data.customerNumber}
        />
      ))}
    </div>
  );
};

export default Products;
