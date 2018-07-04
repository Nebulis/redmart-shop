import React, {Component} from 'react';
import './App.css';
import {HeaderContainer} from './Header/Header';
import {Route, Switch} from 'react-router-dom'
import {routes} from './routes';
import {CartProvider} from './Cart/CartContext';
import {ProductsProvider} from './Shop/Products/ProductsContext';

class App extends Component {
  render() {
    return (
      <ProductsProvider>
        <CartProvider>
          <div className="App">
            <HeaderContainer/>
            <Switch>
              {routes.map((route, index) => <Route {...route} key={index}/>)};
            </Switch>
          </div>
        </CartProvider>
      </ProductsProvider>
    );
  }
}

export default App;
