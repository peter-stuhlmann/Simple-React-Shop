import React, { Component } from 'react';
import MainNavigation from './MainNavigation';

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <section>
            <span className="shop-title">Simple React Shop</span>
            <MainNavigation />
          </section>
        </header>
      </React.Fragment>
    );
  }
}