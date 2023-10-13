import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Logo from "./../assets/Logo.svg";
import Shop from './../assets/shopp.svg'

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

      {/* Mobile Menu */}
      {isMobileResolution ? (
        <div className="mobile-navbar">
          <Menu>
            <MenuButton as={IconButton} aria-label="Options" icon={<HamburgerIcon />} variant="outline" />
            <MenuList>
              <MenuItem>
                <Link to='/'>Home</Link>
              </MenuItem>
              <MenuItem>
                <Link to='/Footer'>About</Link>
              </MenuItem>
              <MenuItem>Menu</MenuItem>
              <MenuItem>Reservations</MenuItem>
              <MenuItem>Order Online</MenuItem>
              <MenuItem>Login</MenuItem>
            </MenuList>
          </Menu>
          <img src={Logo} className="navbar-main-logo" alt="little lemon logo"></img>

          <img src={Shop} className="navbar-shopp-logo" alt="little lemon logo"></img>
        </div>
      ) : 
      <div className="desktop-navbar">
        <div>
          <img src={Logo} className="navbar-main-logo" alt="little lemon logo"></img>
        </div>
        {/* Desktop Menu */}
        <div>
          <ul className='navbar-list desktop-menu'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
            <Link to='/Footer'>About</Link>
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
      </div>
      }
    </div>
  );
}

export default Navigation;