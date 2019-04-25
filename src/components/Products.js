import React, { Component } from 'react';
import ProductList from './ProductList';

export default class Products extends Component {

  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    fetch('ProductCatalog.json')
      .then(response => response.json())
      .then(product => this.setState(state => state.items = product))
  }
 
  handleClick = (event) => {
    console.log('Click')
  }

  render() {
    return (
      <React.Fragment>
        <h1>Products</h1>
        <ProductList items={this.state.items} handleClick={this.handleClick} />
      </React.Fragment>
    );
  }
}