import React from 'react';
import {Shop} from './Shop/Shop';
import {Cart} from './Cart/Cart';
import {RoutedProductDetail} from './ProductDetail/ProductDetail';

export const NotFound = () => 'Route not found. 404';

export const routes = [
  {
    path: '/',
    component: Shop,
    exact: true,
  },
  {
    path: '/cart',
    component: Cart,
    exact: true,
  },
  {
    path: '/product/:id',
    component: RoutedProductDetail,
  },
  {
    component: NotFound,
  },
];