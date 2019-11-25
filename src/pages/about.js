import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About page</h1>
      <p>this will be the about</p>
      <p>
        Need a instructor? <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
