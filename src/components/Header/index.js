import React from 'react'
import Nav from '../Nav'
import Logo from '../../icons/logo'

const navItems = [
  {
    to: '/about',
    label: 'About',
  },
  {
    to: '/',
    label: ' Blog',
  },
  {
    to: '/newsletter',
    label: ' Newsletter',
  },
]

const Header = () => {
  return (
    <header>
      {/* <Logo /> */}
      <Nav navItems={navItems} />
    </header>
  )
}

export default Header
