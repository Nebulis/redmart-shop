import React from 'react';
import products from '../../public/api/products';
import {ProductDetailContainer} from './ProductDetail';
import {mount} from 'enzyme';
import {CartProvider} from '../Cart/CartContext';

describe('ProductDetail component', () => {
  let originalFetch;
  const productsPromise = Promise.resolve({
    ok: true,
    json: () => products,
  });

  beforeEach(() => {
    originalFetch = window.fetch;
    // mock fetch
    // first call return products
    window.fetch = jest.fn()
      .mockImplementationOnce(() => productsPromise)
  });

  afterEach(() => {
    window.fetch = originalFetch;
  });

  test('display NutriWell LemonGrass With Ginger when passing the correct product', async () => {
    const wrapper = await mount(<CartProvider><ProductDetailContainer match={{params: {id: 'NutriWell LemonGrass With Ginger'}}} /></CartProvider>);
    await Promise.all([productsPromise]); // ~ process.nextTick
    wrapper.update();
    expect(wrapper.find('.ProductDetail-name').length).toBe(1);
    expect(wrapper.find('.ProductDetail-name').text()).toBe('NutriWell LemonGrass With Ginger');
  });

  test('display Loading... when passing an unknown product', async () => {
    const wrapper = await mount(<CartProvider><ProductDetailContainer match={{params: {id: 'nooooo'}}} /></CartProvider>);
    await Promise.all([productsPromise]); // ~ process.nextTick
    wrapper.update();
    expect(wrapper.find('.ProductDetail-name').length).toBe(0);
    expect(wrapper.text()).toContain('Loading ...');
  });
});