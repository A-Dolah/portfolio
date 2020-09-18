import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ContentHeader from "../components/ContentHeader"

import contactStyles from "./contact.module.scss"

const ContactPage = () => {
  const title = "If you have any questions whatsoever"
  const paragraph = "Contact me!"

  return (
    <Layout>
      <SEO title="Contact" />
      <ContentHeader title={title} paragraph={paragraph} />
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className={contactStyles.form}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className={contactStyles.p}>Your Name:</p>
        <input type="text" name="name" required />
        <p className={contactStyles.p}>Your Email:</p>
        <input type="email" name="email" required />
        <p className={contactStyles.p}>Message:</p>
        <textarea name="message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </Layout>
  )
}

export default ContactPage
