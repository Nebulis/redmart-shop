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
    jest.doMock('./CartContext', () => {
      return {
        CartContext: {
          Consumer: (props) => props.children({products: [products[0], products[1]], addProduct: () => {}})
        }
      }
    });
    const Cart = require('./Cart').Cart;
    const wrapper = await mount(<MemoryRouter initialEntries={['/']}><Cart /></MemoryRouter>);
    expect(wrapper.find('.Shop-Products-product').length).toBe(2);
  });
});