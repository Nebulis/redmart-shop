import React from 'react';
import products from '../../public/api/products';
import filters from '../../public/api/filters';
import {Shop} from './Shop';
import {mount} from 'enzyme';
import {MemoryRouter} from 'react-router-dom';

describe('Shop component', () => {
  let originalFetch;
  const productsPromise = Promise.resolve({
    ok: true,
    json: () => products,
  });
  const filtersPromise = Promise.resolve({
    ok: true,
    json: () => filters,
  });

  beforeEach(() => {
    originalFetch = window.fetch;
    // mock fetch
    // first call return products
    // second call return filters
    window.fetch = jest.fn()
      .mockImplementationOnce(() => productsPromise)
      .mockImplementationOnce(() => filtersPromise);
  });

  afterEach(() => {
    window.fetch = originalFetch;
  });

  test('display all products when no filter is appied', async () => {
    const wrapper = await mount(<MemoryRouter initialEntries={['/']}><Shop/></MemoryRouter>);
    await Promise.all([productsPromise, filtersPromise]);
    wrapper.update();
    expect(wrapper.find('.Shop-Products-product').length).toBe(8);
  });

  test('should filter products depending on filters', async () => {
    const wrapper = await mount(<MemoryRouter initialEntries={['/']}><Shop/></MemoryRouter>);
    await Promise.all([productsPromise, filtersPromise]);
    wrapper.update();
    wrapper.find('.Shop-Filters-value input').at(0).simulate('click'); // click on nutriwell
    // when clicking on nutriwell only 6 elements are expected
    expect(wrapper.find('.Shop-Products-product').length).toBe(6);
  })
});