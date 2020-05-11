import React, { useEffect } from "react"
import { graphql } from "gatsby"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Prism from "prismjs"
import Head from "../components/Head"
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
    },
    renderMark: {
      [MARKS.CODE]: code => (
        <pre data-src="prism.js" class="language-javascript" data-src-loaded>
          <code class="language-javascript">{code}</code>
        </pre>
      ),
    },
  }
  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
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
