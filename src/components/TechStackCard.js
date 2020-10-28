import React from "react"
import PropTypes from "prop-types"
import { RiCheckboxBlankCircleLine, RiCheckboxCircleLine } from "react-icons/ri"

import techStackCardStyles from "./techStackCard.module.scss"

const TechStackCard = ({
  title,
  children,
  checkedCircles,
  unCheckedCircles,
}) => {
  return (
    <article className={techStackCardStyles.cardContainer}>
      <header className={techStackCardStyles.header}>
        {children}
        <h1>{title}</h1>
      </header>
      <div className={techStackCardStyles.rating}>
        {checkedCircles &&
          Array(checkedCircles)
            .fill("")
            .map((_, i) => (
              <RiCheckboxCircleLine key={i} color="white" size="25px" />
            ))}
        {unCheckedCircles &&
          Array(unCheckedCircles)
            .fill("")
            .map((_, i) => (
              <RiCheckboxBlankCircleLine key={i} color="white" size="25px" />
            ))}
      </div>
    </article>
  )
}

TechStackCard.propTypes = {
  title: PropTypes.string.isRequired,
  checkedCircles: PropTypes.number.isRequired,
  unCheckedCircles: PropTypes.number.isRequired,
}

export default TechStackCard
