import React, { useState } from "react"
import Layout from "../components/Layout"
import Head from "../components/Head"
import ContentHeader from "../components/ContentHeader"

const ContactPage = () => {
  const title = "If you have any questions whatsoever"
  const paragraph = "Contact me!"

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const resetState = () => {
    setName("")
    setEmail("")
    setMessage("")
  }

  const formData = new FormData()

  const setFormData = () => {
    formData.append("name", name)
    formData.append("email", email)
    formData.append("message", message)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setFormData()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: { ...formData },
    })
      .then(() => {
        resetState()
        alert("Success!")
      })
      .catch(error => alert(error))
  }

  return (
    <Layout>
      <Head title="Contact" />
      <ContentHeader title={title} paragraph={paragraph} />

      <form onSubmit={handleSubmit}>
        <p>
          <label>
            Your Name:{" "}
            <input
              type="text"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Your Email:{" "}
            <input
              type="email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Message:{" "}
            <textarea
              name="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </Layout>
  )
}

export default ContactPage
