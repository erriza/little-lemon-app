import { useState, useEffect } from "react";

import Logo from "./../assets/Logo.svg";

import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";

function Navigation() {
  const [isMobileResolution, setIsMobileResolution] = useState(false);

  // Function to check if the screen width is below a certain threshold (e.g., 768 pixels)
  const checkMobileResolution = () => {
    setIsMobileResolution(window.innerWidth <= 768);
  };

  useEffect(() => {
    // Initial check on component mount
    checkMobileResolution();

    // Add an event listener to update the state when the window is resized
    window.addEventListener("resize", checkMobileResolution);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", checkMobileResolution);
    };
  }, []);

  return (
    <div className="navbar">
      <img src={Logo} alt="little lemon logo"></img>

      {/* Mobile Menu */}
      {isMobileResolution && (
          <Menu>
            <MenuButton as={IconButton} aria-label="Options" icon={<HamburgerIcon />} variant="outline" />
            <MenuList>
              <MenuItem>Home</MenuItem>
              <MenuItem>About</MenuItem>
              <MenuItem>Menu</MenuItem>
              <MenuItem>Reservations</MenuItem>
              <MenuItem>Order Online</MenuItem>
              <MenuItem>Login</MenuItem>
            </MenuList>
          </Menu>

      )}

      {/* Desktop Menu */}
      <ul className='navbar-list desktop-menu'>
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Menu">Menu</a>
        </li>
        <li>
          <a href="#Reservations">Reservations</a>
        </li>
        <li>
          <a href="#OrderOnline">Order Online</a>
        </li>
        <li>
          <a href="#Login">Login</a>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;