import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact Page</h1>
      <p>Phone: 050505050</p>
      <p>email: adamdolah@gmail.comç</p>
      <p>
        Go to google!{" "}
        <a href="https://google.com" target="_blank">
          Google
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
