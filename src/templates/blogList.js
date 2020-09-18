import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/SEO"
import ContentHeader from "../components/ContentHeader"
import Pager from "../components/Pager"

import blogStyles from "./blogList.module.scss"

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
            fluid(maxWidth: 800, quality: 90) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`

const blogList = ({ data, pageContext }) => {
  const title = "Things on my mind"
  const paragraph = "Could be anything, really. Most probably coding though!"

  return (
    <Layout>
      <SEO title="Blog Posts" />
      <ContentHeader title={title} paragraph={paragraph} />
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((edge, index) => {
          return (
            <li key={index} className={blogStyles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <aside className={blogStyles.aside}>
                  <h2>{edge.node.title}</h2>
                  <p>{edge.node.publishedDate}</p>
                </aside>
                {edge.node.image && (
                  <div className={blogStyles.imageWrapper}>
                    <Img
                      imgStyle={{
                        objectFit: "contain",
                      }}
                      fluid={edge.node.image.fluid}
                      alt="thumbnail"
                      className={blogStyles.image}
                    />
                  </div>
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
