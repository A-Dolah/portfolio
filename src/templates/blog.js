import React, { useEffect } from "react"
import { graphql } from "gatsby"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Prism from "prismjs"
import Seo from "../components/SEO"
import Layout from "../components/Layout"
import ContentHeader from "../components/ContentHeader"

import * as blogStyles from "./blog.module.scss"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
      }
      image {
        file {
          url
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
      // [BLOCKS.EMBEDDED_ASSET]: node => {
      //   console.log('NODE ASSET', node)
      //   const alt = node.data.target.fields.title["en-US"]
      //   const url = node.data.target.fields.file["en-US"].url
      //   return <img alt={alt} src={url} />
      // },
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
      <Seo
        title={props.data.contentfulBlogPost.title}
        image={props.data.contentfulBlogPost.image.resize}
      />
      <ContentHeader
        title={props.data.contentfulBlogPost.title}
        paragraph={props.data.contentfulBlogPost.publishedDate}
      />
      <section className={blogStyles.contentSection}>
        {documentToReactComponents(
          JSON.parse(props.data.contentfulBlogPost.body.raw),
          options
        )}
      </section>
    </Layout>
  )
}

export default Blog
