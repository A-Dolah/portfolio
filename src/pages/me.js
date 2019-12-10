import React from "react"
import Layout from "../components/Layout"
import Head from "../components/Head"
import ContentHeader from "../components/ContentHeader"
import Timeline from "../components/Timeline"

import meStyles from "./me.module.scss"

const AboutPage = () => {
  const title = "This is about me"
  const paragraph = "Not only things I made but also who I am!"
  return (
    <Layout>
      <Head title="About" />
      <section className={meStyles.timeline}>
        <ContentHeader title={title} paragraph={paragraph} />
        <Timeline />
      </section>
      <section className={meStyles.sectionTwo}>
        <div className={meStyles.one}>
          Heyo this is me you how are you o<span></span>
        </div>
        <div className={meStyles.two}>2</div>
        <div className={meStyles.three}>3</div>
        <div className={meStyles.four}>4</div>
      </section>
      <section className={meStyles.section}>BOTTOM</section>
    </Layout>
  )
}

export default AboutPage
