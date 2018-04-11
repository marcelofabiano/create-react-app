import React, { Component } from 'react'

import api from '../../../api'

class Categories extends Component {

  constructor(props) {
    super(props)
    this.state = {
      categories: []
    }
    this.loadData = this.loadData.bind(this)
  }

  loadData() {
    api.get('/categories').then((res) => (
      this.setState({
        categories: res.data
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
      <div className='page'>
        <h1>Categorias</h1>
        <p>{JSON.stringify(this.state.categories)}</p>
      </div>
    )
  }
}

export default Categories
