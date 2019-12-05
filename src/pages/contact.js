import React from "react"
import Layout from "../components/Layout"
import Head from "../components/Head"
import ContentHeader from "../components/ContentHeader"

const ContactPage = () => {
  const title = "If you have any questions whatsoever"
  const paragraph = "Contact me!"
  return (
    <Layout>
      <Head title="Contact" />
      <ContentHeader title={title} paragraph={paragraph} />
      <ul>
        <li>email: adamdolah@gmail.com</li>
        <li>phone: 004636499079</li>
        <li>etc</li>
        <li>etc</li>
      </ul>
    </Layout>
  )
}

export default ContactPage
