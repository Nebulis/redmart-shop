import React from 'react';
import PropTypes from 'prop-types';
import './Products.css';
import {withRouter} from 'react-router-dom';
import {price} from '../../utils/price';

export const Products = withRouter(({products, history, onAddProduct}) => {
  return <div className="Shop-Products-container">
    {
      // navigate with product name which is the best solution so far ? (no id ?)
      products.map((product, index) => <div key={index} className="Shop-Products-product" onClick={() => history.push(`/product/${product.name}`)}>
        <span className="Shop-Products-product-image"><img src={`/images/${product.image}`} alt={`product ${product.name}`}/></span>
        <span className="Shop-Products-product-name">{product.name}</span>
        <span className="Shop-Products-product-measurement">{product.measurement}</span>
        <span className="Shop-Products-product-price">{price(product.price)}</span>
        <a href="#" className="Shop-Products-product-action" onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          onAddProduct(product)
        }}>Add to cart</a>
      </div>)
    }
  </div>
});

Products.propTypes = ({
  products: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    desc: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    measurement: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
  onAddProduct: PropTypes.func.isRequired,
});