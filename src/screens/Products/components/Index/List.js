import React, { Component, Fragment } from 'react'

import api from '../../../../api'

class List extends Component {

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
      <div>
        { this.state.products.map(product => (
          <Fragment>
            <div className='card' key={ product.id }>
              <div className='card-body'>
                Nome: { product.name } <br/>
                Descrição: { product.description } <br/>
                price: { product.price } <br/>
                category: { product.category } <br/>
              </div>
            </div>
            <br/>
          </Fragment>
        ))}
      </div>
    )
  }
}

export default List
