import React, { Component } from 'react'

export default class ProductList extends Component {

  render() {
    return (
      <ul className="product-list">
        {this.props.items.map(
          item => (
            <li key={item.id} className="product-item">
              <span className="product-title">{item.title}</span>
              <p className="product-description">{item.description}</p>
              <span className="product-price">{item.price}</span><br />
              <input min="0" type="number"></input>
              <button type="button" className="submit" id={item.id} aria-label="Submit" onClick={this.props.handleClick}>Add to cart</button>
            </li >
          )
        )}
      </ul>
    )
  }
}