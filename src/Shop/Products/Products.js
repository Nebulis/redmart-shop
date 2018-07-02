import React from 'react';
import PropTypes from 'prop-types';
import './Products.css';

export const Products = ({products}) => {
  return <div className="Shop-Products-container">
    {
      products.map((product, index) => <div key={index} className="Shop-Products-product">
        <span className="Shop-Products-product-image"><img src={`/images/${product.image}`} /></span>
        <span className="Shop-Products-product-name">{product.name}</span>
        <span className="Shop-Products-product-measurement">{product.measurement}</span>
        <span className="Shop-Products-product-price">{product.price.toLocaleString('en-SG', {style: 'currency', currency: 'SGD'})}</span>
        <a href="#" className="Shop-Products-product-action">Add to cart</a>
      </div>)
    }
  </div>
};

Products.propTypes = ({
  products: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    desc: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    measurement: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired
});