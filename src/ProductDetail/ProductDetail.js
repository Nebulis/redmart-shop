import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './ProductDetail.css'
import {price} from '../utils/price';
import PropTypes from 'prop-types';
import {CartContext} from '../Cart/CartContext';

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
        }}>Add to cart</a>
      </div>
    </div>
  </div>
};

ProductDetail.propTypes = {
  onAddProduct: PropTypes.func.isRequired,
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    desc: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    measurement: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

// let's create a container so we separate behaviour from pure rendering
export class ProductDetailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {}
    };
  }

  // fetch again the product anf find the matching product from the url
  // we could eventually use the fetched product from another component to avoid multiple fetching :)
  // we use the name as the key as there is no id in the data
  componentDidMount() {
    return fetch('/api/products.json')
      .then(data => data.json())
      .then(products => products.find(product => product.name === this.props.match.params.id))
      .then(product => product && this.setState({product: product}));
  }

  render() {
    return this.state.product.name
      ? <CartContext.Consumer>
        {({addProduct}) =><ProductDetail product={this.state.product} onAddProduct={addProduct}/> }
        </CartContext.Consumer>
      : 'Loading ...';
  }
}

export const RoutedProductDetail = withRouter(ProductDetailContainer);