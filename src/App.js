import React, {Component} from 'react';
import './App.css';
import {Header} from './Header/Header';
import {Route, Switch} from 'react-router-dom'
import {routes} from './routes';
import {CartProvider} from './Cart/CartContext';

class App extends Component {
  render() {
    return (
      <CartProvider>
        <div className="App">
          <Header/>
          <Switch>
            {routes.map((route, index) => <Route {...route} key={index}/>)};
          </Switch>
        </div>
      </CartProvider>
    );
  }
}

export default App;
