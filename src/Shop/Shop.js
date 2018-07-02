import React, {Component} from 'react';
import './Shop.css';
import {Products} from './Products/Products';
import {Filters} from './Filters/Filters';
import {capitalize} from '../utils/capitalize';

export class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      filters: [],
      selectedFilters: {},
    }
  }

  componentDidMount() {
    fetch('/api/products.json')
      .then(data => data.json())
      .then(products => this.setState({products}));
    fetch('/api/filters.json')
      .then(data => data.json())
      .then(filters => filters.map(filter => ({
        ...filter,
        values: [...new Set(filter.values.map(value => capitalize(value)))], // remove duplicates by using a set
      })))
      .then(filters => this.setState({filters}));
  }

  render() {
    return <div className="Shop">
      <div className="Shop-filters">
        <Filters filters={this.state.filters} filtersChanged={(selectedFilters) => this.setState({selectedFilters})} />
      </div>
      <div className="Shop-products">
        <Products products={this.state.products}/>
      </div>
    </div>;
  }
};