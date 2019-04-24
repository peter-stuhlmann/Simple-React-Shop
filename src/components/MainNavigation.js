import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class MainNavigation extends Component {

  render() {
    return (
      <nav>
        <ul>
          <li><NavLink activeClassName="selected" to="/">Products</NavLink></li>
          <li><NavLink activeClassName="selected" to="/cart">Shopping Cart</NavLink></li>
        </ul>
      </nav>
    );
  }

}