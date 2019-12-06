import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Head from "../components/Head"
import Pager from "../components/Pager"

import blogStyles from "../pages/blog.module.scss"

export const blogListQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulBlogPost(
      sort: { fields: publishedDate, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          title
          slug
          publishedDate(formatString: "MMMM Do, YYYY")
          image {
            fixed(width: 100, height: 100) {
              width
              height
              src
              srcSet
            }
          }
        }
      }
    }
  }
`

const blogList = ({ data, pageContext }) => {
  return (
    <Layout>
      <Head title="Blog" />

      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((edge, index) => {
          return (
            <li key={index} className={blogStyles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <aside>
                  <h2>{edge.node.title}</h2>
                  <p>{edge.node.publishedDate}</p>
                </aside>
                {edge.node.image && (
                  <Img fixed={edge.node.image.fixed} alt="thumbnail" />
                )}
              </Link>
            </li>
          )
        })}
      </ol>
      <Pager pageContext={pageContext} />
    </Layout>
  )
}

export default blogList
