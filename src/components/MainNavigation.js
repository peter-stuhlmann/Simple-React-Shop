import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class MainNavigation extends Component {

  render() {
    return (
      <nav className="main-navigation">
        <ul>
          <li><NavLink activeClassName="selected" exact to="/">Products</NavLink></li>
          <li><NavLink activeClassName="selected" exact to="/cart">Shopping Cart</NavLink></li>
        </ul>
      </nav>
    );
  }

}