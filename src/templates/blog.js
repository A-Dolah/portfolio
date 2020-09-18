import React, { useEffect } from "react"
import { graphql } from "gatsby"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Prism from "prismjs"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import ContentHeader from "../components/ContentHeader"

import blogStyles from "./blog.module.scss"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
      image {
        fixed {
          src
        }
      }
    }
  }
`

const Blog = props => {
  useEffect(() => {
    Prism.highlightAll()
  })
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img className={blogStyles.image} alt={alt} src={url} />
      },
      [BLOCKS.QUOTE]: (node, children) => (
        <pre className="language-javascript">
          <code className="language-javascript">
            {children.map(line => line.props.children).join("\n")}
          </code>
        </pre>
      ),
    },
  }
  return (
    <Layout>
      <SEO
        title={props.data.contentfulBlogPost.title}
        description={props.data.contentfulBlogPost.image.fixed}
      />
      <ContentHeader
        title={props.data.contentfulBlogPost.title}
        paragraph={props.data.contentfulBlogPost.publishedDate}
      />
      <section className={blogStyles.contentSection}>
        {documentToReactComponents(
          props.data.contentfulBlogPost.body.json,
          options
        )}
      </section>
    </Layout>
  )
}

export default Blog
