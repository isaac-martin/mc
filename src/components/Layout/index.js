import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import { MainWrapper, Container } from './layout.styles'

import GlobalStyle from '../../theme/globalStyle'
import Header from '../Header'
import Footer from '../Footer'

import theme from '../../theme'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <Header siteTitle={data.site.siteMetadata.title} />
          <MainWrapper>{children}</MainWrapper>
          <Footer />
        </Container>
      </ThemeProvider>
    )}
  />
)

export default Layout
