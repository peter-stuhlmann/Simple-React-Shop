import React, { Component } from "react";
import { round } from "../helpers/helper"

export default class ShoppingCartItem extends Component {

  render() {
    
    const product = this.props.product;

    return (
      <tr>
        <td><img src={product.preview} alt={product.title} /></td>
        <td>
          {product.title}<br />
          {product.stock}<br />
          {product.shipping}
        </td>
        <td>€ {product.price}</td>
        <td>€ {round(product.price * this.props.amount, 2)}</td>
        <td>{this.props.amount}</td>
        <td>
          <button onClick={() => { this.props.increaseProductAmount(product.id); }}>+</button>
          <button onClick={() => { this.props.decreaseProductAmount(product.id); }} >-</button>
        </td>
      </tr>
    );
  }
}