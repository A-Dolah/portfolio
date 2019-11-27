import React from "react"
import Layout from "../components/Layout"

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact Page</h1>
      <p>Phone: 050505050</p>
      <p>email: adamdolah@gmail.com</p>
      <p>
        Go to google!{" "}
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
          Google
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
