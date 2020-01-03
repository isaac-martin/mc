import React from 'react'
import Header from './Header'
import Footer from './Footer'

import { rhythm } from '../utils/typography'

const Layout = ({ children }) => {
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
