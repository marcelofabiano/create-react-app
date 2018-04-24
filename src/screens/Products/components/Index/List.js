import React, { Component } from 'react'

import Product from '../../resources'

class List extends Component {

  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
    this.loadData = this.loadData.bind(this)
  }

  loadData() {
    Product.list().then(res => (
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
      <div>
        { this.state.products.map(product => (
          <div className='card' key={ product.id }>
            <div className='card-body'>
              Nome: { product.name } <br/>
              Descrição: { product.description } <br/>
              valor: { product.price } <br/>
              categoria: { product.category } <br/>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default List
