import React, { Component } from 'react'

export default class ProductList extends Component {

  inputAmount = React.createRef();

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
            <li key={this.props.items.id} className="product-item">
              <span className="product-title">{this.props.items.title}</span>
              <div className="product-preview"><img src={this.props.items.preview} /></div>
              <span className="product-rating">{this.productRating(this.props.items.rating)}</span>
              <p className="product-description">{this.props.items.description}</p>
              <span className="product-price">€ {this.props.items.price}</span><br />
              {this.productAvailability(this.props.items.stock)}
              <select ref={this.inputAmount} defaultValue="0" onChange={()=> console.log(this.select)}>
                {this.selectProductAmount(this.props.items.stock)}
              </select> 
              <button type="button" className="submit" aria-label="Submit" onClick={() => { this.props.handleClick( this.props.items.id, Number(this.inputAmount.current.value)); }}><span className="fas fa-cart-plus">&nbsp;</span>Add to cart</button>
            </li >
    )
  }
}