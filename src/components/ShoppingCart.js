import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import ShoppingCartItem from "./ShoppingCartItem";
import { calculateTotal } from "../helpers/helper"

export default class ShoppingCart extends Component {

  render() {

    const itemCount = Object.keys(this.props.cart).length;

    return (
      <React.Fragment>

        <MetaTags>
          <title>Shopping cart | Simple React Shop</title>
          <link rel="shortcut icon" type="image/png" href={require("../assets/img/favicon.png")} sizes="96x96" />
          <meta name="description" content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." />
        </MetaTags>

        <h1>Shopping Cart</h1>

        {itemCount === 0 && <p>Your Shopping Cart is empty.</p>}

        {itemCount > 0 && (
          <table>
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>Name</th>
                <th>Price</th>
                <th>Total</th>
                <th>Amount</th>
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
                <td colSpan="6">&nbsp;</td>
              </tr>
              <tr>
                <td colSpan="4">&nbsp;</td>
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