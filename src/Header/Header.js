import React from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom';
import {computePrice} from '../selectors/products.selector';
import {ProductsAndCartConsumer} from '../ProductsAndCartConsumer';

// please use typescript to have easy types :)
export const Header = ({products, cart}) => {
  return (
    <div className="Header">
      <NavLink activeClassName="Header-selected" className="Header-link Header-browse" exact
               to="/">Browse</NavLink>
      <NavLink activeClassName="Header-selected" className="Header-link Header-cart" exact
               to="/cart">Cart {computePrice(products, cart)}</NavLink>
    </div>
  )
};

export const HeaderContainer = () => {
  return (
    <ProductsAndCartConsumer>
      {({cart, products}) =>
        <Header products={products} cart={cart}/>
      }
    </ProductsAndCartConsumer>
  )
};