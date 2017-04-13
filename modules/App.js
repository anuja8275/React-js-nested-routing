import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div >
        <div className="container-fluid">
         <div className="row">
          <div className="col-lg-12">
              <div id="wrapper">
            <ul role="nav" className="borderred sidebar-nav">
            <li className="sidebar-brand"><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/repos">Repos</NavLink></li>
            <li><NavLink to="">part2</NavLink></li>
             <li><NavLink to="">part2</NavLink></li>
              <li><NavLink to="">part2</NavLink></li>
               <li><NavLink to="">part2</NavLink></li>
        </ul>
        {this.props.children}
        </div>
          </div>
         </div>
        </div>
      </div>
    )
  }
})
