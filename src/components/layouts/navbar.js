import React from 'react'
import {Link} from 'react-router-dom'

export default props => (
  <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
    <div className="container">
      <Link className='navbar-brand' to='/'>REACT</Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarCollapse'
        aria-controls='navbarCollapse'
        aria-expanded='false'
        aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarCollapse'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link className='nav-link' to='/'>Dashboard</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/products'>Produtos</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/categories'>Categorias</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)
