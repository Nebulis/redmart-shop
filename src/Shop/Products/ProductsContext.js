import React from 'react';
import {Fetch} from '../../Fetch/Fetch';

export const ProductsContext = React.createContext();

export class ProductsProvider extends React.Component {
  state = {
    products: [],
  };

  render() {
    return (
      <Fetch endpoint={`${process.env.PUBLIC_URL}/api/products.json`} onFetchSucceeded={(products) => this.setState({products})}>
        <ProductsContext.Provider value={this.state.products}>
          {this.props.children}
        </ProductsContext.Provider>
      </Fetch>
    )
  }
}