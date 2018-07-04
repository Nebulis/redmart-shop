import React from 'react';
import {ProductsContext} from './Shop/Products/ProductsContext';
import {CartContext} from './Cart/CartContext';

export const ProductsAndCartConsumer = ({children}) => {
  return <ProductsContext.Consumer>
    {(products) =>
      <CartContext.Consumer>
        {({cart, addProduct}) => children({products, cart, addProduct})}
      </CartContext.Consumer>
    }
  </ProductsContext.Consumer>
}