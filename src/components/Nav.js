import React from 'react'
import { Link } from 'gatsby'

const Nav = ({ navItems, seperator = null }) => {
  return navItems.map((link, index) => (
    <>
      <Link to={link.to} activeStyle={{ color: '#ffde59' }}>
        {link.label}
      </Link>
      {index !== navItems.length && seperator && seperator}
    </>
  ))
}

export default Nav
