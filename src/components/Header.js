import React, { Component } from 'react';
import MainNavigation from './MainNavigation';

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <span>Simple React Shop</span>
        <MainNavigation />
      </React.Fragment>
    );
  }
}