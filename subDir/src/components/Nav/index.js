import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { NavLink } from './styles'

const Nav = ({ navItems, seperator = null }) => {
  const theme = useContext(ThemeContext)

  return navItems.map((link, index) => (
    <>
      <NavLink to={link.to} activeStyle={{ color: theme.palette.primary }}>
        {link.label}
      </NavLink>
      {index !== navItems.length - 1 && seperator && seperator}
    </>
  ))
}

export default Nav
