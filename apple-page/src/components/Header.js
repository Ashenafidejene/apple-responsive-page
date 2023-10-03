import React from 'react';
import searchIcon from './images/icons/search-icon-sm.png';
import cartIcon from './images/icons/cart-sm.png';
import logoIcon from './images/icons/logo-sm.png';
import Navigation from './js/Navigation';
const Header = () => {
  return (
    <div className="nav-wrapper fixed-top">
      <div className="container">
        <nav className="navbar navbar-toggleable-sm navbar-expand-md">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
            ☰
          </button>
          <a className="navbar-brand mx-auto" href="#"><img src={logoIcon} alt="Logo" /></a>
          <div className="navbar-collapse collapse">
            <ul className="navbar-nav nav-justified w-100 nav-fill">
              <Navigation urlLink="/mac" urlName="Mac" flag="true" />
              <Navigation urlLink="/iPhone" urlName="iPhone" flag="true"/>
              <Navigation urlLink="/iPad" urlName="iPad" flag="true" />
              <Navigation urlLink="/Watch" urlName="Watch" flag="true" />
              <Navigation urlLink="/TV" urlName="TV" flag="true" />
              <Navigation urlLink="/Music" urlName="Music" flag="true" />
              <Navigation urlLink="/Support" urlName="Support" flag="true" />
              <Navigation urlLink="/search/" pic={searchIcon} urlName="Search"/>
              <Navigation urlLink="/Cart" pic={cartIcon} urlName="Cart"/>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;