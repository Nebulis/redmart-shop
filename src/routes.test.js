import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import App from './App';
import {Shop} from './Shop/Shop';
import {Cart} from './Cart/Cart';
import {RoutedProductDetail} from './ProductDetail/ProductDetail';
import {mount} from 'enzyme';
import {NotFound} from './routes';

describe('routes', () => {
  let originalFetch;

  beforeAll(() => {
    originalFetch = window.fetch;
    // mock fetch
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => []
    }));
  });

  afterAll(() => {
    window.fetch = originalFetch;
  });

  test('it should render shop component when navigating to "/"', async () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <App/>
      </MemoryRouter>
    );
    expect(wrapper.find(Shop)).toHaveLength(1);
    expect(wrapper.find(Cart)).toHaveLength(0);
    expect(wrapper.find(RoutedProductDetail)).toHaveLength(0);
    expect(wrapper.find(NotFound)).toHaveLength(0);
  });

  test('it should render cart component when navigating to "/cart"', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/cart']}>
        <App/>
      </MemoryRouter>
    );
    expect(wrapper.find(Shop)).toHaveLength(0);
    expect(wrapper.find(Cart)).toHaveLength(1);
    expect(wrapper.find(RoutedProductDetail)).toHaveLength(0);
    expect(wrapper.find(NotFound)).toHaveLength(0);
  });

  test('it should render product detail component when navigating to "/product/some"', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/product/some']}>
        <App/>
      </MemoryRouter>
    );
    expect(wrapper.find(Shop)).toHaveLength(0);
    expect(wrapper.find(Cart)).toHaveLength(0);
    expect(wrapper.find(RoutedProductDetail)).toHaveLength(1);
    expect(wrapper.find(NotFound)).toHaveLength(0);
  });

  test('it should render page not found component when navigating to "/unknown"', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/unknown']}>
        <App/>
      </MemoryRouter>
    );
    expect(wrapper.find(Shop)).toHaveLength(0);
    expect(wrapper.find(Cart)).toHaveLength(0);
    expect(wrapper.find(RoutedProductDetail)).toHaveLength(0);
    expect(wrapper.find(NotFound)).toHaveLength(1);
  });
});
