import React, { useState, useEffect } from "react";
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

const Store = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/products")
      .then((res) => {
        return res.json();
      })
      .then((snapshot) => setData(snapshot));
  }, []);
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
            <Product key={i} bg={item.imageurl["en-US"]}>
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
