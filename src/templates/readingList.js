import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/SEO"
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
            fluid(maxWidth: 800, quality: 90) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`

const readingList = ({ data, pageContext }) => {
  const title = "A place for resources made by others"
  const paragraph = "A few tips on some great resources"

  return (
    <Layout>
      <SEO title="Reading Posts" />
      <ContentHeader title={title} paragraph={paragraph} />

      <ol className={readingStyles.posts}>
        {data.allContentfulReadingPost.edges.map((edge, index) => {
          return (
            <li key={index} className={readingStyles.post}>
              <a
                href={edge.node.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <aside className={readingStyles.aside}>
                  <h2>{edge.node.article}</h2>
                  <p>{edge.node.linkedDate}</p>
                </aside>
                {edge.node.thumbnail && (
                  <div className={readingStyles.imageWrapper}>
                    <Img
                      imgStyle={{
                        objectFit: "contain",
                      }}
                      fluid={edge.node.thumbnail.fluid}
                      alt="thumbnail"
                      className={readingStyles.image}
                    />
                  </div>
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
