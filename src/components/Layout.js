import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "normalize.css/normalize.css"
import "typeface-oswald"
import Header from "./Header"
import Footer from "./Footer"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "images/fuji.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className={layoutStyles.background}>
      <div className={layoutStyles.imageContainer}>
        <Img
          imgStyle={{ objectFit: "contain" }}
          fluid={data.image.childImageSharp.fluid}
          alt="fuji image"
        />
      </div>
      <div className={`${layoutStyles.container} container`}>
        <Header />
        <div className={layoutStyles.content}>{props.children}</div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
