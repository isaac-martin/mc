import React from 'react'
import Nav from './Nav'

const navItems = [
  {
    to: '/terms',
    label: 'Terms Of Service',
  },
  {
    to: '/privacy',
    label: ' Privacy Policy',
  },
]

const Footer = () => {
  return (
    <footer>
      © NMWBU {new Date().getFullYear()} |
      <Nav navItems={navItems} seperator={'|'} />
    </footer>
  )
}

export default Footer
