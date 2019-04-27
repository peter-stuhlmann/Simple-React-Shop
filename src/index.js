import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './assets/scss/style.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import LegalNotice from './components/LegalNotice';
import PrivacyPolicy from './components/PrivacyPolicy';
import NotFound from './components/NotFound';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    fetch('ProductCatalog.json')
      .then(response => response.json())
      .then(product => this.setState(state => state.items = product))
  }

  handleClick = (event) => {
    console.log('Click')
  }

  render() {
    return (
      <Router>
        
        <Header />

        <main>
          <Switch>
            <Route exact path="/" render={(props) => <Products {...props} items={this.state.items} handleClick={this.handleClick} />} />
            <Route path="/cart" component={ ShoppingCart } />
            <Route path="/legalnotice" component={ LegalNotice } />
            <Route path="/privacypolicy" component={ PrivacyPolicy } />
            <Route component={ NotFound } />
          </Switch>
        </main>

        <Footer />

      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
