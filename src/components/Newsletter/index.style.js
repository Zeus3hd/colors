import styled from "styled-components";
const colors = {
  crimson: "#D72036",
  purple: "#833895",
  black: "#22282E",
  blue: "#2777EF",
};
const Wrapper = styled.div`
  position: relative;
`;
const SvgBackground = styled.img`
  width: 100%;
  max-width: 450px;
  z-index: -1;

  @media (max-width: 1024px) {
    display: none;
  }
`;
const FormContainer = styled.form`
  background: #fff;
  position: absolute;
  top: 0;
  margin: 2.5rem;
  padding: 2rem;
  width: 100%;
  max-width: 450px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;
const FormTitle = styled.p`
  font-weight: bold;
  color: ${colors.black};
  letter-spacing: 1px;
  font-size: 2rem;
  margin: 0;
`;
const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
`;
const InputField = styled.input`
  padding: 0.5rem 1rem;
  border: 1px solid ${colors.purple + "55"};
  border-radius: 0.5rem;
`;
const InputLabel = styled.label`
  color: ${colors.purple};
  font-size: 0.9rem;
  padding: 0.2rem 0.5rem;
`;
const FormButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  box-shadow: 0px 0px 2px ${colors.black};
  background: ${colors.black};
  color: #fff;
  font-weight: bold;
  font-size: 1.2rem;
`;
export {
  Wrapper,
  SvgBackground,
  FormContainer,
  FormTitle,
  InputGroup,
  InputField,
  InputLabel,
  FormButton,
};
