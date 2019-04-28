import React, { Component } from 'react';
import ShoppingCartItem from "./ShoppingCartItem";
import { calculateTotal } from "../helpers/helper"

export default class ShoppingCart extends Component {

  render() {

    const itemCount = Object.keys(this.props.cart).length;

    return (
      <React.Fragment>
        <h1>Shopping Cart</h1>

        {itemCount === 0 && <p>Your Shopping Cart is empty.</p>}

        {itemCount > 0 && (
          <table>
            <thead>
              <tr>
                <th>Amount</th>
                <th>Name</th>
                <th>Price</th>
                <th>Total</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(this.props.cart).map(uuid => (
                <ShoppingCartItem
                  key={uuid}
                  product={this.props.items[uuid]}
                  amount={this.props.cart[uuid]}
                  increaseProductAmount={this.props.increaseProductAmount}
                  decreaseProductAmount={this.props.decreaseProductAmount}
                />
              ))}
              <tr>
                <td colSpan="5">&nbsp;</td>
              </tr>
              <tr>
                <td colSpan="3">&nbsp;</td>
                <td>
                  <strong>Total</strong>
                </td>
                <td>€ {calculateTotal(this.props.cart, this.props.items)}</td>
              </tr>
            </tbody>
          </table>
        )}
      </React.Fragment>       
    );
  }
}