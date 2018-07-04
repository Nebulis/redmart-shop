import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './ProductDetail.css'
import {price} from '../utils/price';
import PropTypes from 'prop-types';
import {mapCartAndProduct} from '../selectors/products.selector';
import {ProductsAndCartConsumer} from '../ProductsAndCartConsumer';

// all components are small let's keep them in the same file
export const ProductDetail = ({product, onAddProduct}) => {
  return <div className='ProductDetail-container'>
    <h1 className="ProductDetail-name">{product.name}</h1>
    <div className="ProductDetail-image-description-container">
      <div className="ProductDetail-image"><img src={`/images/${product.image}`} alt={`product ${product.name}`}/>
      </div>
      <div className="ProductDetail-description-container">
        <div className="ProductDetail-measurement">{product.measurement}</div>
        <div className="ProductDetail-price">{price(product.price)}</div>
        <div className="ProductDetail-description">{product.desc}</div>
        <a href="#" className="ProductDetail-action" onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          onAddProduct(product)
        }}>Add to cart {product.quantity > 0 && <span>({product.quantity})</span>}</a>
      </div>
    </div>
  </div>
};

// TODO handle default value of quantity
ProductDetail.propTypes = {
  onAddProduct: PropTypes.func.isRequired,
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number,
    desc: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    measurement: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

// let's create a container so we separate behaviour from pure rendering
export class ProductDetailContainer extends Component {
  findProduct(products) {
    return products.find(product => product.id === this.props.match.params.id);
  }

  render() {
    return <ProductsAndCartConsumer>
      {({products, cart, addProduct}) => {
        const product = this.findProduct(products);
        return product ?
          <ProductDetail product={mapCartAndProduct(product, cart)} onAddProduct={addProduct}/>
          : 'Loading ...'
      }
      }
    </ProductsAndCartConsumer>
  }
}

export const RoutedProductDetail = withRouter(ProductDetailContainer);