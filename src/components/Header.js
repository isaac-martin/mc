import React from 'react'
import Nav from './Nav'

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
  return <Nav navItems={navItems} />
}

export default Header
