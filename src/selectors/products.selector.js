import {price} from '../utils/price';

export const computePrice = (products, cart) => {
  return price(
    mapCartAndProducts(products, cart)
      .reduce((price, product) => price + product.quantity * product.price, 0)
  );
};

export const mapCartAndProductsWIthQuantity = (products, cart) => {
  return mapCartAndProducts(products, cart).filter(product => product.quantity);
};

export const mapCartAndProducts = (products, cart) => {
  return products.map((product) => mapCartAndProduct(product, cart));
};

export const mapCartAndProduct = (product, cart) => ({
  ...product,
  quantity: cart[product.id] || 0,
});