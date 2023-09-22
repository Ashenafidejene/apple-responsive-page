import React from 'react';
import searchIcon from './images/icons/search-icon-sm.png';
import cartIcon from './images/icons/cart-sm.png';
import logoIcon from './images/icons/logo-sm.png';

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
              <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/mac/">Mac</a></li>
              <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">iPhone</a></li>
              <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">iPad</a></li>
              <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">Watch</a></li>
              <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">TV</a></li>
              <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">Music</a></li>
              <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">Support</a></li>
              <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/search/"><img src={searchIcon} alt="Search" /></a></li>
              <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/cart/"><img src={cartIcon} alt="Cart" /></a></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;