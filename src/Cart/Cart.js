import React, {Fragment} from 'react';
import {Products} from '../Shop/Products/Products';
import {computePrice, mapCartAndProductsWIthQuantity} from '../selectors/products.selector';
import {ProductsAndCartConsumer} from '../ProductsAndCartConsumer';

// should separate consumer in container to ease testing and reusability
export const Cart = () => {
  return <ProductsAndCartConsumer>
    {({products, cart, addProduct}) =>
      <Fragment>
        <h2> Basket price: {computePrice(products, cart)} </h2>
        <Products products={mapCartAndProductsWIthQuantity(products, cart)}
                  onAddProduct={addProduct}/>
      </Fragment>
    }
  </ProductsAndCartConsumer>
};
