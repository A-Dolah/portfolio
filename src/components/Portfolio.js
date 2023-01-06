import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as portfolioStyles from "./portfolio.module.scss"
import InformationCard from "./InformationCard"

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      portfolio: file(relativePath: { eq: "images/portfolio.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      snapList: file(relativePath: { eq: "images/snaplist.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <section className={portfolioStyles.section}>
      <InformationCard
        link="/blog/mysite"
        title="This Blog Website"
        paragraph="A React website powered by Gatsby. A place where I keep notes and resources I like."
        img={data.portfolio.childImageSharp.fluid}
      />
      <InformationCard
        link="/blog/snap-list"
        title="Snap List"
        paragraph="A MERN stack application. Take a photo of food, get suggested ingredient and create grocery lists."
        img={data.snapList.childImageSharp.fluid}
      />
    </section>
  )
}

export default Portfolio
