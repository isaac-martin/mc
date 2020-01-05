import React, { useState } from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'

const BlogIndex = ({ data }) => {
  const [page, setPage] = useState(1)

  const siteTitle = data.site.siteMetadata.title
  const allPosts = data.allMdx.edges
  const pages = Math.ceil(allPosts.length / 3)
  const postToSlice = page === 1 ? 0 : (page - 1) * 3 - 1
  const paginatedPosts = allPosts.slice(postToSlice, postToSlice + 3)

  return (
    <Layout title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      Page : {page}
      Pages : {pages}
      {paginatedPosts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <div key={node.fields.slug}>
            <h3
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
              <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                {title}
              </Link>
            </h3>
            <small>{node.frontmatter.date}</small>
            <p
              dangerouslySetInnerHTML={{
                __html: node.excerpt,
              }}
            />
          </div>
        )
      })}
      {page !== 1 && (
        <button onClick={() => setPage(page - 1)}>Previous</button>
      )}
      {page !== pages && (
        <button onClick={() => setPage(page + 1)}>Next</button>
      )}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/blog/" } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
