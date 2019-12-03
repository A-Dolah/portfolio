import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Head from "../components/Head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />

      <h1>About page</h1>
      <p>this will be the about</p>
      <p>
        Need a instructor? <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
