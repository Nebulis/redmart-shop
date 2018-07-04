import React, {Component} from 'react';
import './Shop.css';
import {Products} from './Products/Products';
import {Filters} from './Filters/Filters';
import {capitalize} from '../utils/capitalize';
import {mapCartAndProducts} from '../selectors/products.selector';
import {ProductsAndCartConsumer} from '../ProductsAndCartConsumer';

const extractPrice = (price) => {
  const prices = price.split('-');
  return {
    min: parseFloat(prices[0], 10),
    max: parseFloat(prices[1], 10),
  }
};

export class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: [],
      selectedFilters: {},
    }
  }

  filterProducts(products, filters) {
    return products
    // include products if no filter or the name contains at least one checked brand
    // use lowercase in order to ignore cases
      .filter(product => !filters.brand || filters.brand.length === 0 || filters.brand.find(brand => product.brand.toLowerCase().includes(brand.toLowerCase())))
      // include products if no filter or price is in range of one of selected price
      // use extractPrice to get min and max value from filters`
      .filter(product => !filters.price || filters.price.length === 0 || filters.price.find(price => {
        const {min, max} = extractPrice(price);
        return min <= product.price && max >= product.price;
      }));
  }

  componentDidMount() {
    return fetch('/api/filters.json')
      .then(data => data.json())
      .then(filters => filters.map(filter => ({
        ...filter,
        values: [...new Set(filter.values.map(value => capitalize(value)))], // remove duplicates by using a set
      })))
      .then(filters => this.setState({filters}))
  }

  render() {
    return <ProductsAndCartConsumer>
      {({products, cart, addProduct}) =>
        <div className="Shop">
          <div className="Shop-filters">
            <Filters filters={this.state.filters}
                     filtersChanged={(selectedFilters) => this.setState({selectedFilters})}/>
          </div>
          <div className="Shop-products">
            <Products products={mapCartAndProducts(this.filterProducts(products, this.state.selectedFilters), cart)}
                      onAddProduct={addProduct}/>
          </div>
        </div>
      }
    </ProductsAndCartConsumer>
  }
};