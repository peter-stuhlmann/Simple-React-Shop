import React, { Component } from 'react'

export default class ProductList extends Component {

  selectProductAmount = (stock) => {
    let productStock = []
    for (let i = 0; i <= stock; i++) {
      productStock.push(<option value={i}>{i}</option>)
    }
    return productStock
  }

  productAvailability = (stock) => {
    let lowAvailability = ""
    if (stock <= 5) {
      lowAvailability = <p className="product-availability-low">Only {stock} left in stock - order soon.</p>
    } else {
      lowAvailability = <p className="product-availability-high">In Stock.</p>
    }
    return lowAvailability
  }

  render() {
    return (
      <ul className="product-list">
        {this.props.items.map(
          item => (
            <li key={item.id} className="product-item">
              <span className="product-title">{item.title}</span>
              <div className="product-preview"><img src={item.preview} /></div>
              <p className="product-description">{item.description}</p>
              <span className="product-price">€ {item.price}</span><br />
              {this.productAvailability(item.stock)}
              <select>
                {this.selectProductAmount(item.stock)}
              </select>
              <button type="button" className="submit" id={item.id} aria-label="Submit" onClick={this.props.handleClick}><span className="fas fa-cart-plus">&nbsp;</span>Add to cart</button>
            </li >
          )
        )}
      </ul>
    )
  }
}