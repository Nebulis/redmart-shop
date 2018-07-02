import {mount} from 'enzyme/build/index';
import React from 'react';
import {Filters} from './Filters';

describe('Header component', () => {
  const filters = [
    {
      'name': 'brand',
      'values': [
        'NutriWell',
        'Marigold',
        'Meiji'
      ]
    },
    {
      'name': 'price',
      'values': [
        '0-0.99',
        '1-1.99',
        '2-2.99'
      ]
    }
  ];

  // test multiple user scenarios
  test('it should call function with new filters', () => {
    const filtersChanged = jest.fn();
    const wrapper = mount(<Filters filters={filters} filtersChanged={filtersChanged}/>);

    wrapper.find('.Shop-Filters-value input').at(1).simulate('click'); // add Marigold
    expect(filtersChanged).toHaveBeenCalledWith({'brand': ['Marigold']});
    filtersChanged.mockReset();

    wrapper.find('.Shop-Filters-value input').at(1).simulate('click'); // remove Marigold
    expect(filtersChanged).toHaveBeenCalledWith({'brand': []});
    filtersChanged.mockReset();

    wrapper.find('.Shop-Filters-value input').at(0).simulate('click'); // add NutriWell
    filtersChanged.mockReset();
    wrapper.find('.Shop-Filters-value input').at(5).simulate('click'); // add 2-2.99
    expect(filtersChanged).toHaveBeenCalledWith({'brand': ['NutriWell'], 'price': ['2-2.99']});
    filtersChanged.mockReset();

    wrapper.find('.Shop-Filters-value input').at(4).simulate('click'); // add 2-2.99
    expect(filtersChanged).toHaveBeenCalledWith({'brand': ['NutriWell'], 'price': ['2-2.99', '1-1.99']});
    filtersChanged.mockReset();
  });
});