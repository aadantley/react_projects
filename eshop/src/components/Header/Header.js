// local
import "./Header.css";

//3rd party
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";

import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <StorefrontIcon fontSize="large" />
        <h2 className="header__logoTitle">Aaron's Appealing Accumulations</h2>
      </div>
      <div className="header__search">
        <SearchIcon fontSize="large" className="header__searchIcon" />
        <input
          type="text"
          className="header__searchInput"
          placeholder="Search For Anythang N' Err'thang"
        ></input>
      </div>
      <div className="header__nav">
        <div className="nav__item">
          <span className="nav__itemLineOne">Hello Guest</span>
          <span className="nav__itemLineTwo">Sign In</span>
        </div>
        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>
        <div className="nav__item">
          <ShoppingBasketIcon fontSize="large" className="nav__itemBasket" />
          <span className="nav__itemLineTwo">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
