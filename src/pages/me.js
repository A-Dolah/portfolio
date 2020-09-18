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
  const title = "A little bit about me!"
  const paragraph = "Who I am and what I made"
  return (
    <Layout>
      <SEO title="About" />
      <ContentHeader title={title} paragraph={paragraph} />
      <section className={meStyles.content}>
        <AboutHeader text="Timeline" />
        <Timeline />
        {/* <AboutHeader text="Resume" />
        <a href={Resume} download className={meStyles.a}>
          <img src={pdfIcon} alt="pdf icon" className={meStyles.image} />
        </a> */}
        <AboutHeader text="Portfolio" />
        <Portfolio />
      </section>
    </Layout>
  )
}

export default AboutPage
