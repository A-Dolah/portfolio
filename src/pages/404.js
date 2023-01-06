import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import ContentHeader from "../components/ContentHeader"
import Seo from "../components/SEO"

import * as notFoundStyles from "./404.module.scss"

const NotFound = () => {
  return (
    <Layout>
      <Seo title="404" />
      <ContentHeader title="404" paragraph="Page Not Found" />
      <Link to="/" className={notFoundStyles.link}>
        Go Back To Landing
      </Link>
    </Layout>
  )
}

export default NotFound
