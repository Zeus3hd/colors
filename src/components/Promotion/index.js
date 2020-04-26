import React from "react";
import {
  Wrapper,
  ProductContainer,
  ProductBackground,
  ProductImage,
  ProductTextContainer,
  CatchPhrase,
  ProductParagraph,
} from "./index.style";
import productImg from "../../img/svgcutdress.png";
import productBackground from "../../img/svgpurple.png";
const Promotion = () => {
  return (
    <Wrapper>
      <ProductContainer>
        <ProductBackground src={productBackground} />
        <ProductImage src={productImg} />
        <ProductTextContainer>
          <CatchPhrase>CATCH PHRASE</CatchPhrase>
          <ProductParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </ProductParagraph>
        </ProductTextContainer>
      </ProductContainer>
    </Wrapper>
  );
};

export default Promotion;
