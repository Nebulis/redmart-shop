import React from 'react';
import {Products} from '../Shop/Products/Products';
import {CartContext} from './CartContext';

export const Cart = () => {
  return <CartContext.Consumer>
    {({products, addProduct}) => <Products products={products} onAddProduct={addProduct} /> }
  </CartContext.Consumer>;
};