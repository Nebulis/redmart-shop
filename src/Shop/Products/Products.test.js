import {mount} from 'enzyme/build/index';
import React from 'react';
import products from '../../../public/api/products';
import {Products} from './Products';
import {MemoryRouter} from 'react-router-dom';

describe('Header component', () => {
  // test multiple user scenarios
  test('it should call onAddProduct with first product when clicking on addToCart button', () => {
    const onAddProduct = jest.fn();
    const wrapper = mount(<MemoryRouter initialEntries={['/']}><Products products={products} onAddProduct={onAddProduct}/></MemoryRouter>);
    wrapper.find('.Shop-Products-product-action').at(0).simulate('click');
    expect(onAddProduct).toHaveBeenCalledWith(products[0]);
  });
});