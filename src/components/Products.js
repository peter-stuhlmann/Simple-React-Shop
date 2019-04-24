import React, { Component } from 'react';

export default class Products extends Component {
    render() {
      return (
        <React.Fragment>
          <h1>Products</h1>
          <div className="products">
            <div className="product">
              <span className="product-title">Product #1</span>
              <p className="product-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
              <span className="product-price">€ 4.99</span>
              <input min="0" type="number"></input>
              <button type="button">Add to cart</button>
            </div>
            <div className="product">
              <span className="product-title">Product #2</span>
              <p className="product-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
              <span className="product-price">€ 12.99</span>
              <input min="0" type="number"></input>
              <button type="button">Add to cart</button>
            </div>
            <div className="product">
              <span className="product-title">Product #3</span>
              <p className="product-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
              <span className="product-price">€ 42.95</span>
              <input min="0" type="number"></input>
              <button type="button">Add to cart</button>
            </div>
            <div className="product">
              <span className="product-title">Product #4</span>
              <p className="product-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
              <span className="product-price">€ 2.99</span>
              <input min="0" type="number"></input>
              <button type="button">Add to cart</button>
            </div>
          </div>
        </React.Fragment>
    );
  }
}