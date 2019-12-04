import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Head from "../components/Head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />

      <h1>About page</h1>
      <p>This will be an about page</p>
      <p>
        Need a developer? <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
