import React from 'react';

export const CartContext = React.createContext();

/**
 * as we save all products in memory (yeah we can here :) ) the cart only contain the id reference of the products
 * and the quantity associated to. so the shape of the state is:
 * {
 *    "1": 2,
 *    "8": 9,
 * }
 * where the key is the id of the product and the value is the quantity in the cart
 */
export class CartProvider extends React.Component {
  state = {
    cart: {},
    addProduct: (product) => {
      this.setState(prevState => {
        const quantity = prevState.cart[product.id] || 0;
        return {
          cart: {
            ...prevState.cart,
            [product.id]: quantity + 1,
          }
        }
      })
    },
  };
  render() {
    return (
      <CartContext.Provider value={this.state}>
        {this.props.children}
      </CartContext.Provider>
    )
  }
}