import React from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom';

export const Header = () => {
  return (
    <div className="Header">
      <NavLink activeClassName="Header-selected" className="Header-link Header-browse" exact to="/">Browse</NavLink>
      <NavLink activeClassName="Header-selected" className="Header-link Header-cart" exact to="/cart">Cart</NavLink>
    </div>
  )
};