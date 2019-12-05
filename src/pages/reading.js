import React from "react"
import Layout from "../components/Layout"
import Head from "../components/Head"
import ContentHeader from "../components/ContentHeader"

const title = "These are things written by others I find very useful"
const paragraph = "Hopefully you do too!"
const Reading = () => {
  return (
    <Layout>
      <Head title="About" />
      <ContentHeader title={title} paragraph={paragraph} />
    </Layout>
  )
}

export default Reading
