import React from 'react'
import NavLink from './NavLink'
import Example from './Example'

export default React.createClass({
  render() {
    return (
      <div className="borderreds page-content-wrapper">
        <h2>Repos</h2>
        <p>Hello from loream ipsum</p>
       
        <ul>
          <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
          <li><NavLink to="/repos/facebook/react">React</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
