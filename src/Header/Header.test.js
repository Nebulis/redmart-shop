import {mount} from 'enzyme/build/index';
import {MemoryRouter} from 'react-router-dom';
import products from '../../public/api/products.json';
import React from 'react';
import {Header} from './Header';

describe('Header component', () => {
  test('it should not render Browse link when navigating to /', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <Header products={products} cart={{}}/>
      </MemoryRouter>
    );

    // make sure .Header-browser element also have .Header-selected which is hiding item
    expect(wrapper.find('.Header-browse .Header-selected').exists()).toBe(true);
  });

  test('it should not render Cart link when navigating to /cart', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/cart']}>
        <Header products={products} cart={{}}/>
      </MemoryRouter>
    );

    // make sure .Header-cart element also have .Header-selected which is hiding item
    expect(wrapper.find('.Header-cart .Header-selected').exists()).toBe(true);
  });

  test('it should not render both link when navigating to /product/some', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/product/some']}>
        <Header products={products} cart={{}}/>
      </MemoryRouter>
    );
    expect(wrapper.find('.Header-selected .Header-selected').exists()).toBe(false);
    expect(wrapper.find('.Header-selected').exists()).toBe(false);
    expect(wrapper.find('.Header-cart').exists()).toBe(true);
    expect(wrapper.find('.Header-cart .Header-selected').exists()).toBe(false);
  });
});