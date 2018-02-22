import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'


class MenuItem extends Component {
  
  static contextTypes = {
    translate: PropTypes.func
  }
  
  render() {
    const { children, to } = this.props
    const { translate } = this.context
    
    return (
      <div>
        <NavLink to={ to } activeStyle={ { color: 'red' } }>{ translate(children) }</NavLink>
      </div>
    )
  }
}

MenuItem.propTypes = {}

export default MenuItem