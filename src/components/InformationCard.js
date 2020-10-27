import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import informationCardStyles from "./informationCard.module.scss"

const InformationCard = ({ title, paragraph, link, img }) => {
  return (
    <div className={informationCardStyles.container}>
      <Link to={link}>
        <h1 className={informationCardStyles.title}>{title}</h1>
        <br />
        <p className={informationCardStyles.paragraph}>{paragraph}</p>
        {img && <Img fluid={img} objectFit="cover" />}
      </Link>
    </div>
  )
}

export default InformationCard
