import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"
import portfolioStyles from "./portfolio.module.scss"

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      portfolio: file(relativePath: { eq: "images/portfolio.jpg" }) {
        childImageSharp {
          fixed(width: 250, height: 185, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      snapList: file(relativePath: { eq: "images/snaplist.jpg" }) {
        childImageSharp {
          fixed(width: 250, height: 185, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <section className={portfolioStyles.section}>
      <Link to="/blog/mysite">
        <div className={portfolioStyles.container}>
          <p className={portfolioStyles.paragraph}>This Blog</p>
          <Img
            fixed={data.portfolio.childImageSharp.fixed}
            className={portfolioStyles.image}
            alt="portfolio picture"
          />
        </div>
      </Link>
      <Link to="/blog/snap-list">
        <div className={portfolioStyles.container}>
          <p className={portfolioStyles.paragraph}>Snap List</p>
          <Img
            fixed={data.snapList.childImageSharp.fixed}
            className={portfolioStyles.image}
            alt="portfolio picture"
          />
        </div>
      </Link>
    </section>
  )
}

export default Portfolio
