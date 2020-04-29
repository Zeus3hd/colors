import React, { useState } from "react";
import {
  Wrapper,
  CategoriesContainer,
  CategoryButton,
  Gallery,
  Product,
  ProductTitle,
  ProductSellingPointContainer,
  ProductSellingPoint,
  ProductPrice,
} from "./index.style";
import productOne from "../../img/content/abaya5.jpg";
import productTwo from "../../img/content/abaya6.jpg";
import productThree from "../../img/content/abaya7.jpg";
import productFour from "../../img/content/abaya8.jpg";
import productFive from "../../img/content/abaya9.jpg";

const Store = () => {
  const [data, setData] = useState([
    productOne,
    productTwo,
    productThree,
    productFour,
    productFive,
  ]);
  return (
    <Wrapper>
      <CategoriesContainer>
        <CategoryButton active>DRESSES</CategoryButton>
        <CategoryButton>COATS</CategoryButton>
        <CategoryButton>ABAYA</CategoryButton>
      </CategoriesContainer>
      <Gallery>
        {data.map((item, i) => {
          return (
            <Product key={i} bg={item}>
              <ProductTitle>TITLE HERE</ProductTitle>
              <ProductPrice>$85,43</ProductPrice>
              <ProductSellingPointContainer>
                <ProductSellingPoint>SELLING POINT</ProductSellingPoint>
                <ProductSellingPoint>SELLING POINT</ProductSellingPoint>
                <ProductSellingPoint>SELLING POINT</ProductSellingPoint>
              </ProductSellingPointContainer>
            </Product>
          );
        })}
      </Gallery>
    </Wrapper>
  );
};

export default Store;
