import React, { Component } from 'react';
import ProductList from './ProductList';

export default class Products extends Component {

  render() {
    return (
      <React.Fragment>
        <h1>Products</h1>
        <ul className="product-list">
          {Object.keys(this.props.items).map(
            item => 
              <ProductList items={this.props.items[item]} handleClick={this.props.handleClick} />
          )}
        </ul>
      </React.Fragment>
    );
  }
}