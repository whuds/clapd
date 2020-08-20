//Import Statements at the top
import React from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from "reactstrap";

import { SearchBar } from "./SearchBar.js";

import upload from './upload.svg';

//Importing styling
import "bootstrap/dist/css/bootstrap.css";

//import './Navbar.css';

//creating a NavBar Component
//  2 ways: Class Components vs Functional

function NavBar() {
  //any hooks would go here
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  //we return our JSX code
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">clapd</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar >
            {/*<NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>*/}
          </Nav>
          <div className='searchbar'>
            <SearchBar />
          </div>
          <img className='upload' height={40} src={upload} alt='Upload' />
          {' '}
          <Button className='login'>Log In</Button>
        </Collapse>
      </Navbar>
    </div>
  );
}

//exporting our NavBar component, so we can use it in our index file
export { NavBar };
