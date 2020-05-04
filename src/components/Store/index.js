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
  const [activeCategory, setActiveCategory] = useState("abaya");
  useEffect(() => {
    fetch("/products")
      .then((res) => {
        return res.json();
      })
      .then((snapshot) => {
        setData(snapshot);
        console.log(snapshot[0].type["en-US"]);
      });
  }, []);

  return (
    <Wrapper>
      <CategoriesContainer>
        <CategoryButton
          active={activeCategory === "dress"}
          onClick={() => setActiveCategory("dress")}
        >
          DRESSES
        </CategoryButton>
        <CategoryButton
          active={activeCategory === "coat"}
          onClick={() => setActiveCategory("coat")}
        >
          COATS
        </CategoryButton>
        <CategoryButton
          active={activeCategory === "abaya"}
          onClick={() => setActiveCategory("abaya")}
        >
          ABAYA
        </CategoryButton>
      </CategoriesContainer>
      <Gallery>
        {data.map((item, i) => {
          if (item.type["en-US"] === activeCategory) {
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
          }
        })}
      </Gallery>
    </Wrapper>
  );
};

export default Store;
