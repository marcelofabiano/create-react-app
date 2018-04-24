import React, { Component } from 'react'

import api from '../../../../api'

class List extends Component {

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
      <ul>
        {this.state.categories.map(category => (
          <li key={category.id}>{category.description}</li>
        ))}
      </ul>
    )
  }
}

export default List
