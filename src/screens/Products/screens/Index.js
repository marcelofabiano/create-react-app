import React, { Component } from 'react'

import api from '../../../api'

class Products extends Component {

  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
    this.loadData = this.loadData.bind(this)
  }

  loadData() {
    api.get('/products').then((res) => (
      this.setState({
        products: res.data
      })
    )).catch((res) => (
      console.log(res.error)
    ))
  }

  componentDidMount() {
    this.loadData()
  }

  render() {
    return (
      <div className="page">
        <h1>Produtos</h1>
        <p>{JSON.stringify(this.state.products)}</p>
      </div>
    )
  }
}

export default Products
