import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './assets/scss/style.scss';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import LegalNotice from './components/LegalNotice';
import PrivacyPolicy from './components/PrivacyPolicy';
import NotFound from './components/NotFound';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ Products } />
          <Route path="/cart" component={ ShoppingCart } />
          <Route path="/legalnotice" component={ LegalNotice } />
          <Route path="/privacypolicy" component={ PrivacyPolicy } />
          <Route component={ NotFound } />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
