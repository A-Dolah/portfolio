import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../components/SEO"
import ContentHeader from "../components/ContentHeader"
import Pager from "../components/Pager"

import * as readingStyles from "./readingList.module.scss"

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
            gatsbyImageData(quality: 90, width: 800)
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
      <Seo title="Reading Posts" />
      <ContentHeader title={title} paragraph={paragraph} />

      <ol className={readingStyles.posts}>
        {data.allContentfulReadingPost.edges.map((edge) => {
          const thumbnail = getImage(edge.node.thumbnail.gatsbyImageData)
          return (
            <li className={readingStyles.post} key={edge.node.article}>
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
                    <GatsbyImage image={thumbnail} alt={edge.node.article} />
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
