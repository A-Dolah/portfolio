import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import ContentHeader from "../components/ContentHeader"
import SEO from "../components/SEO"

import notFoundStyles from "./404.module.scss"

const NotFound = () => {
  return (
    <Layout>
      <SEO title="404" />
      <ContentHeader title="404" paragraph="Page Not Found" />
      <Link to="/home" className={notFoundStyles.link}>
        Go Back To Landing
      </Link>
    </Layout>
  )
}

export default NotFound
