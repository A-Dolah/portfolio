import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ContentHeader from "../components/ContentHeader"
import Timeline from "../components/Timeline"
import Portfolio from "../components/Portfolio"
import meStyles from "./me.module.scss"

const AboutHeader = ({ text }) => {
  return <h1 className={meStyles.aboutHeader}>{text}</h1>
}

const AboutPage = () => {
  const title = "A lawyer turned web developer"
  const paragraph = "Here's a little bit about my journey"
  return (
    <Layout>
      <SEO title="About" />
      <ContentHeader title={title} paragraph={paragraph} />
      <section className={meStyles.content}>
        <AboutHeader text="The Timeline" />
        <Timeline />

        <AboutHeader text="Portfolio" />
        <Portfolio />
      </section>
    </Layout>
  )
}

export default AboutPage
