import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../components/SEO"
import ContentHeader from "../components/ContentHeader"
import Pager from "../components/Pager"

import * as blogStyles from "./blogList.module.scss"

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
              gatsbyImageData(width: 800, quality: 90)
          }
        }
      }
    }
  }
`

const blogList = ({ data, pageContext }) => {
  const title = "A place for notes"
  const paragraph =
    "Contains a little bit of everything, but mostly programming related topics"

  return (
    <Layout>
      <Seo title="Blog Posts" />
      <ContentHeader title={title} paragraph={paragraph} />
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((edge) => {
          const image = getImage(edge.node.image.gatsbyImageData)
          return (
            <li className={blogStyles.post} key={edge.node.slug + Math.random()}>
              <Link to={`/blog/${edge.node.slug}`}>
                <aside className={blogStyles.aside}>
                  <h2>{edge.node.title}</h2>
                  <p>{edge.node.publishedDate}</p>
                </aside>
                {edge.node.image && (
                  <div className={blogStyles.imageWrapper}>
                    <GatsbyImage image={image} alt={edge.node.slug} />
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
