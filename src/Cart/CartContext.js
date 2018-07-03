import React from 'react';

export const CartContext = React.createContext();

export class CartProvider extends React.Component {
  state = {
    products: [],
    addProduct: (product) => this.setState(state => ({products: [...state.products, product]})),
  };
  render() {
    return (
      <CartContext.Provider value={this.state}>
        {this.props.children}
      </CartContext.Provider>
    )
  }
}