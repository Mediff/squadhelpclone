import React, { Component } from 'react';
import { Provider } from 'react-redux';
import config from './config';
import App from '../App';
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: config(),
    };
  }

  render() {
    const { store } = this.state;
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact component={(props) => <App {...props}/>}/>
            <Route path="/login" component={(props) => <Login {...props}/>}/>
            <Route path="/register" component={(props) => <Registration {...props}/>}/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default Store;
