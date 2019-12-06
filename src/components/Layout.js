import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Header from "./Header"
import Footer from "./Footer"
import "typeface-arvo"
import "typeface-oswald"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "images/wave.jpg" }) {
        childImageSharp {
          fixed(width: 1600) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <div className={layoutStyles.background}>
      <Img fixed={data.image.childImageSharp.fixed} alt="wave image" />}
      <div className={layoutStyles.container}>
        <Header />
        <div className={layoutStyles.content}>{props.children}</div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
