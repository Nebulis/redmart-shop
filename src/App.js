import React, { Component } from 'react';
import './App.css';
import {Header} from './Header/Header';
import { Route, Switch } from 'react-router-dom'
import {routes} from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          {routes.map((route, index) => <Route {...route} key={index}/>)};
        </Switch>
      </div>
    );
  }
}

export default App;
