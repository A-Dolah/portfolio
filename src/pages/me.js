import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import ContentHeader from "../components/ContentHeader"
import Timeline from "../components/Timeline"
import TechStack from "../components/TechStack"
// import Portfolio from "../components/Portfolio"
import * as meStyles from "./me.module.scss"

const AboutHeader = ({ text }) => {
  return <h1 className={meStyles.aboutHeader}>{text}</h1>
}

const AboutPage = () => {
  const title = "A lawyer turned web developer"
  const paragraph = "Here's a little bit about my journey"
  return (
    <Layout>
      <Seo title="About" />
      <ContentHeader title={title} paragraph={paragraph} />
      <section className={meStyles.content}>
        <AboutHeader text="The Timeline" />
        <Timeline />
        {/* <AboutHeader text="Tech Stack" /> */}
        {/* <TechStack /> */}
        {/* <AboutHeader text="Portfolio" /> */}
        {/* <Portfolio /> */}
      </section>
    </Layout>
  )
}

export default AboutPage
