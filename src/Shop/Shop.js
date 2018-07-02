import React, {Component} from 'react';
import './Shop.css';
import {Products} from './Products/Products';

export class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    }
  }

  componentDidMount() {
    fetch('/api/products.json')
      .then(data => data.json())
      .then(products => this.setState({products}));
  }

  render() {
    return <div className="Shop">
      <div className="Shop-filters">Filters</div>
      <div className="Shop-products">
        <Products products={this.state.products}/>
      </div>
    </div>;
  }
};