
import React, { Component } from 'react'
import searchIcon from '../images/icons/search-icon-sm.png';
import cartIcon from '../images/icons/cart-sm.png';
import logoIcon from '../images/icons/logo-sm.png';
import Navigation from './components/Navigation.js'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Header=()=> {
  
    return (
      <div className="nav-wrapper fixed-top navbar navbar-toggleable-sm navbar-expand-md">
      <Navbar className="w-100" collapseOnSelect expand="lg" variant="dark">
         <Container>
         <Navbar.Brand ><Link to="/"><img className='a' src={logoIcon} alt="Logo" /></Link></Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
         <Nav className="d-flex justify-content-center align-items-center w-100">
                <Navigation urlLink="/mac" urlName="Mac" flag="true" />
                <Navigation urlLink="/iPhone" urlName="iPhone" flag="true"/>
                <Navigation urlLink="/iPad" urlName="iPad" flag="true" />
                <Navigation urlLink="/watch" urlName="Watch" flag="true" />
                <Navigation urlLink="/tv" urlName="TV" flag="true" />
                <Navigation urlLink="/music" urlName="Music" flag="true" />
                <Navigation urlLink="/support" urlName="Support" flag="true" />
                <Navigation urlLink="/AboutMe" urlName="About Me" flag="true" />
                <Navigation urlLink="/search/" pic={searchIcon} urlName="Search"/>
                <Navigation urlLink="/cart" pic={cartIcon} urlName="Cart"/>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </div>
    )
};

export default Header;


