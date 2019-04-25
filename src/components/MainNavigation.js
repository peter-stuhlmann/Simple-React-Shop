import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class MainNavigation extends Component {

  render() {
    return (
      <nav className="main-navigation">
        <ul>
          <li><NavLink activeClassName="selected" exact to="/"><span className="fas fa-th">&nbsp;</span>Products</NavLink></li>
          <li><NavLink activeClassName="selected" exact to="/cart"><span className="fas fa-shopping-cart">&nbsp;</span>Shopping Cart</NavLink></li>
        </ul>
      </nav>
    );
  }

}