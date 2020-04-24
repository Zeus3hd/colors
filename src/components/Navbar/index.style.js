import styled from "styled-components";
const colors = {
  crimson: "#D72036",
  purple: "#833895",
  black: "#22282E",
  blue: "#2777EF",
};
const Wrapper = styled.nav``;

const MenuButtonContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  background: ${colors.crimson};
  mix-blend-mode: soft-light;
  clip-path: circle(
    ${({ isToggled }) => (isToggled ? "50vw" : "20vw")} at 100% 100%
  );
  width: ${({ isToggled }) => (isToggled ? "50vw" : "20vw")};
  height: ${({ isToggled }) => (isToggled ? "50vw" : "20vw")};
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  z-index: 3;
  transition: 0.5s;
  @media (min-width: 1024px) {
    clip-path: circle(
      ${({ isToggled }) => (isToggled ? "10vw" : "5vw")} at 100% 100%
    );
    width: ${({ isToggled }) => (isToggled ? "10vw" : "5vw")};
    height: ${({ isToggled }) => (isToggled ? "10vw" : "5vw")};
  }
`;
const MenuButton = styled.button`
  color: #fff;
  background: transparent;
  border: none;
  font-size: 1.3rem;
  padding: 0.6rem;
  cursor: pointer;
  position: relative;
  z-index: 50;
`;

const MenuLink = styled.a`
  position: absolute;
  left: ${({ left }) => left};
  bottom: ${({ bottom }) => bottom};
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  opacity: ${({ isToggled }) => (isToggled ? "1" : "0")};
  transition: 0.5s;
`;

export { Wrapper, MenuButtonContainer, MenuButton, MenuLink };
