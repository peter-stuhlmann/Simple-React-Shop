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

  productRating = (rating) => {
    let productRating = ""
    if (rating == 5) {
      productRating = <React.Fragment><div className="product-rating" title={rating}><span className="fas fa-star"></span><span className="fas fa-star"></span><span className="fas fa-star"></span><span className="fas fa-star"></span><span className="fas fa-star"></span></div></React.Fragment>
    } else if (rating >= 4.5 && rating < 5) {
      productRating = <React.Fragment><div className="product-rating" title={rating}><span className="fas fa-star"></span><span className="fas fa-star"></span><span className="fas fa-star"></span><span className="fas fa-star"></span><span className="fas fa-star-half-alt"></span></div></React.Fragment>
    } else if (rating >= 4 && rating < 4.5) {
      productRating = <React.Fragment><div className="product-rating" title={rating}><span className="fas fa-star"></span><span className="fas fa-star"></span><span className="fas fa-star"></span><span className="fas fa-star"></span><span className="far fa-star"></span></div></React.Fragment>
    } else if (rating >= 3.5 && rating < 4) {
      productRating = <React.Fragment><div className="product-rating" title={rating}><span className="fas fa-star"></span><span className="fas fa-star"></span><span className="fas fa-star"></span><span className="fas fa-star-half-alt"></span><span className="far fa-star"></span></div></React.Fragment>
    } else if (rating >= 3 && rating < 3.5) {
      productRating = <React.Fragment><div className="product-rating" title={rating}><span className="fas fa-star"></span><span className="fas fa-star"></span><span className="fas fa-star"></span><span className="far fa-star"></span><span className="far fa-star"></span></div></React.Fragment>
    } else if (rating >= 2.5 && rating < 3) {
      productRating = <React.Fragment><div className="product-rating" title={rating}><span className="fas fa-star"></span><span className="fas fa-star"></span><span className="fas fa-star-half-alt"></span><span className="far fa-star"></span><span className="far fa-star"></span></div></React.Fragment>
    } else if (rating >= 2 && rating < 2.5) {
      productRating = <React.Fragment><div className="product-rating" title={rating}><span className="fas fa-star"></span><span className="fas fa-star"></span><span className="far fa-star"></span><span className="far fa-star"></span><span className="far fa-star"></span></div></React.Fragment>
    } else if (rating >= 1.5 && rating < 2) {
      productRating = <React.Fragment><div className="product-rating" title={rating}><span className="fas fa-star"></span><span className="fas fa-star-half-alt"></span><span className="far fa-star"></span><span className="far fa-star"></span><span className="far fa-star"></span></div></React.Fragment>
    } else if (rating >= 1 && rating < 1.5) {
      productRating = <React.Fragment><div className="product-rating" title={rating}><span className="fas fa-star"></span><span className="far fa-star"></span><span className="far fa-star"></span><span className="far fa-star"></span><span className="far fa-star"></span></div></React.Fragment>
    } else {
      productRating = <em>No ratings available.</em>
    }
    return productRating
  }

  render() {
    return (
      <ul className="product-list">
        {this.props.items.map(
          item => (
            <li key={item.id} className="product-item">
              <span className="product-title">{item.title}</span>
              <div className="product-preview"><img src={item.preview} /></div>
              <span className="product-rating">{this.productRating(item.rating)}</span>
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