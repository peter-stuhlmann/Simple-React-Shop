import React, { Component } from 'react';
import ProductList from './ProductList';

export default class Products extends Component {

  render() {
    return (
      <React.Fragment>
        <h1>Products</h1>
        <ProductList items={this.props.items} handleClick={this.props.handleClick} />
      </React.Fragment>
    );
  }
}