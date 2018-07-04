import React from 'react';
import {mount} from 'enzyme';
import {MemoryRouter} from 'react-router-dom';
import products from '../../public/api/products';

describe('Shop component', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('should render all products added in the cart', async () => {
    // add 2 products in the cart context
    jest.doMock('../ProductsAndCartConsumer', () => {
      return {
        ProductsAndCartConsumer: (props) =>
          props.children({products, addProduct: () => {}, cart: {'1': 3, '2': 0, '5': 9}})
      }
    });
    const Cart = require('./Cart').Cart;
    const wrapper = await mount(<MemoryRouter initialEntries={['/']}><Cart /></MemoryRouter>);
    expect(wrapper.find('.Shop-Products-product').length).toBe(2);
  });
});