import React from "react";
import {
  Wrapper,
  SvgBackground,
  FormContainer,
  FormTitle,
  InputGroup,
  InputField,
  InputLabel,
  FormButton,
} from "./index.style";
import svgBg from "../../img/newsletterbg.png";
import formBg from "../../img/formbg.png";
const Newsletter = () => {
  return (
    <Wrapper>
      <SvgBackground src={svgBg} />
      <FormContainer bg={formBg}>
        <FormTitle>GET IN TOUCH</FormTitle>
        <InputGroup>
          <InputLabel>Name</InputLabel>
          <InputField type="text" />
        </InputGroup>
        <InputGroup>
          <InputLabel>E-mail</InputLabel>
          <InputField type="email" />
        </InputGroup>
        <InputGroup>
          <InputLabel>Phone No.</InputLabel>
          <InputField type="text" />
        </InputGroup>
        <FormButton>SEND</FormButton>
      </FormContainer>
    </Wrapper>
  );
};

export default Newsletter;
