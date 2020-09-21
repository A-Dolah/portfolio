import React from "react"
import { Link } from "gatsby"
import informationCardStyles from "./informationCard.module.scss"

const InformationCard = ({ title, paragraph, link }) => {
  return (
    <div className={informationCardStyles.container}>
      <h1 className={informationCardStyles.title}>
        <Link to={link}>{title}</Link>
      </h1>
      <br />
      <p className={informationCardStyles.paragraph}>{paragraph}</p>
    </div>
  )
}

export default InformationCard
