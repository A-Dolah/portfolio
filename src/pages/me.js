import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Head from "../components/Head"
import ContentHeader from "../components/ContentHeader"

const AboutPage = () => {
  const title = "This is about me"
  const paragraph = "Not only things I made but also who I am!"
  return (
    <Layout>
      <Head title="About" />
      <ContentHeader title={title} paragraph={paragraph} />
    </Layout>
  )
}

export default AboutPage
