import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import ProductList from './ProductList';

export default class Products extends Component {

  render() {
    return (
      <React.Fragment>

        <MetaTags>
          <title>Products | Simple React Shop</title>
          <link rel="shortcut icon" type="image/png" href={require("../assets/img/favicon.png")} sizes="96x96" />
          <meta name="description" content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." />
        </MetaTags>

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