import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
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
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url

        return <img className={blogStyles.image} alt={alt} src={url} />
      },
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
