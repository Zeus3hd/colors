import React, { useState } from "react";
import {
  Wrapper,
  MenuButtonContainer,
  MenuButton,
  MenuLink,
} from "./index.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <Wrapper>
      <MenuButtonContainer isToggled={toggleMenu}>
        <MenuButton onClick={() => setToggleMenu(!toggleMenu)}>
          <FontAwesomeIcon icon={faBars} />
        </MenuButton>
        <MenuLink bottom="10%" left="5%" isToggled={toggleMenu}>
          Home
        </MenuLink>
        <MenuLink bottom="35%" left="15%" isToggled={toggleMenu}>
          Store
        </MenuLink>
        <MenuLink bottom="60%" left="30%" isToggled={toggleMenu}>
          Contact
        </MenuLink>
      </MenuButtonContainer>
    </Wrapper>
  );
};

export default Navbar;
