import React, {Component} from 'react';
import './Shop.css';
import {Products} from './Products/Products';
import {Filters} from './Filters/Filters';

export class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      filters: [],
    }
  }

  componentDidMount() {
    fetch('/api/products.json')
      .then(data => data.json())
      .then(products => this.setState({products}));
    fetch('/api/filters.json')
      .then(data => data.json())
      .then(filters => this.setState({filters}));
  }

  render() {
    return <div className="Shop">
      <div className="Shop-filters">
        <Filters filters={this.state.filters} />
      </div>
      <div className="Shop-products">
        <Products products={this.state.products}/>
      </div>
    </div>;
  }
};