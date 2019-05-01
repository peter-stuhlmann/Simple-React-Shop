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
    super()

    this.localStorage = JSON.parse(localStorage.getItem('shoppingcart'))
    this.shoppingcart = (this.localStorage !== null ? this.localStorage : {})

    this.state = {
      items: {},
      cart: {}
    }
  }

  componentDidMount() {
    fetch('ProductCatalog.json')
      .then(response => response.json())
      .then(product => {
        this.setState(state => {
          state.items = product;
          state.cart = this.shoppingcart;
          return state;
        });
      });
  }

  componentDidUpdate() {
    localStorage.setItem("shoppingcart", JSON.stringify(this.state.cart))
  }

  handleClick = (productId, amount) => {
    console.log(productId, amount)

    if (amount < 1 || Number.isNaN(Number(amount))) {
        return;
    }

    if (productId in this.state.cart) {
        this.setState(state => {
            state.cart[productId] += amount;
            console.log(state)
            return state;
        });
    } else {
        this.setState(state => {
            state.cart[productId] = amount;
            return state;
        });
    }  
  }

  increaseProductAmount = productId => {
    if (this.state.cart[productId] < this.state.items[productId].stock) {
      this.setState(state => {
        state.cart[productId]++;
        return state;
      });
    } else {
      console.log('No more products in stock.')
    }
  };

  decreaseProductAmount = productId => {
    if (this.state.cart[productId] > 1) {
      this.setState(state => {
        state.cart[productId]--;
        return state;
      });
    } else {
      this.setState(state => {
        delete state.cart[productId];
        return state;
      });
    }
  };

  render() {
    return (
      <Router>
        
        <Header />

        <main>
          <Switch>
            <Route exact path="/" render={(props) => <Products {...props} items={this.state.items} handleClick={this.handleClick} />} />
            <Route path="/cart" render={(props) => <ShoppingCart {...props} cart={this.state.cart} items={this.state.items} increaseProductAmount={this.increaseProductAmount} decreaseProductAmount={this.decreaseProductAmount} />} />
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
