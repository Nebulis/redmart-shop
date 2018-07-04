import React from 'react';
import products from '../../public/api/products';
import {mount} from 'enzyme';

describe('ProductDetail component', () => {
  let ProductDetailContainer;
  beforeEach(() => {
    jest.doMock('../ProductsAndCartConsumer', () => {
      return {
        ProductsAndCartConsumer: ({children}) => children({products, cart: {}, addProduct: () => {}})
      }
    });
    ProductDetailContainer = require('./ProductDetail').ProductDetailContainer;
  });

  test('display NutriWell LemonGrass With Ginger when passing the correct product', async () => {
    const wrapper = await mount(<ProductDetailContainer match={{params: {id: '2'}}} />);
    expect(wrapper.find('.ProductDetail-name').length).toBe(1);
    expect(wrapper.find('.ProductDetail-name').text()).toBe('NutriWell LemonGrass With Ginger');
  });

  test('display Loading... when passing an unknown product', async () => {
    const wrapper = await mount(<ProductDetailContainer match={{params: {id: 'NutriWell LemonGrass With Ginger'}}} />);
    expect(wrapper.find('.ProductDetail-name').length).toBe(0);
    expect(wrapper.text()).toContain('Loading ...');
  });
});