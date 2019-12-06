import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Head from "../components/Head"
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
  const title = "A place where I collect things on my mind"
  const paragraph =
    "Here you'll find anything from writing about code to thoughts about life"

  return (
    <Layout>
      <Head title="Blog" />
      <ContentHeader title={title} paragraph={paragraph} />

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
