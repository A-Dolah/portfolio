import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello</h1>
      <h2>Welcome to my blog. Have fun!</h2>
      <p>
        Need a developer? <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
