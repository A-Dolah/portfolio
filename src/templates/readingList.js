import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Head from "../components/Head"
import ContentHeader from "../components/ContentHeader"
import Pager from "../components/Pager"

import readingStyles from "./readingList.module.scss"

export const blogListQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulReadingPost(
      sort: { fields: linkedDate, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          article
          linkedDate(formatString: "MMMM Do, YYYY")
          link
          thumbnail {
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

const readingList = ({ data, pageContext }) => {
  const title = "Things others made"
  const paragraph = "I found them very useful, and hope you do too!"

  return (
    <Layout>
      <Head title="Blog" />
      <ContentHeader title={title} paragraph={paragraph} />

      <ol className={readingStyles.posts}>
        {data.allContentfulReadingPost.edges.map((edge, index) => {
          return (
            <li key={index} className={readingStyles.post}>
              <a href={edge.node.link} target="_blank">
                <aside className={readingStyles.aside}>
                  <h2>{edge.node.article}</h2>
                  <p>{edge.node.linkedDate}</p>
                </aside>
                {edge.node.thumbnail && (
                  <Img
                    fixed={edge.node.thumbnail.fixed}
                    alt="thumbnail"
                    className={readingStyles.image}
                  />
                )}
              </a>
            </li>
          )
        })}
      </ol>
      <Pager pageContext={pageContext} />
    </Layout>
  )
}

export default readingList
