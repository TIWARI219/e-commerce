// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import LoginPage from './components/LoginPage';
import UserDetailsPage from './components/UserDetailsPage';
import Cart from './components/Cart';
import ProductDetail from './components/ProductDetail';
import ShippingDetail from './components/ShippingDetail';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route path="/user-details" component={UserDetailsPage} />
            <Route path="/cart" component={Cart} />
            <Route path="/product-detail" component={ProductDetail} />
            <Route path="/shipping-detail" component={ShippingDetail} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

