import React from "react"
import Img from "gatsby-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import VizSensor from "react-visibility-sensor"

import * as vizSensorCardStyles from "./vizSensorCard.module.scss"

const VizSensorCard = ({
  gridArea,
  visible,
  setVisible,
  pictureDimensionExtension,
  data,
  year,
  text,
  cardNumber,
  order,
  image: imageName,
}) => {
  const onChange = (isVisible) => {
    setVisible({ ...visible, [cardNumber]: isVisible })
  }

  const image = getImage(data[imageName])

  return (
    <VizSensor onChange={onChange} partialVisibility={true} minTopValue={400}>
      <div
        style={{ gridArea: cardNumber }}
        className={`${vizSensorCardStyles.divContainer} ${
          visible[cardNumber] ? vizSensorCardStyles.show : ""
        } ${order % 2 === 0 ? vizSensorCardStyles.even : ""}`}
      >
        <div
          className={`${vizSensorCardStyles.content} ${
            visible[cardNumber] ? vizSensorCardStyles.showContent : ""
          }`}
        >
          <h1>{year}</h1>
          <p>{text}</p>
          {image && <GatsbyImage image={image} alt={imageName} />}
        </div>
        {pictureDimensionExtension === "Browser" && (
          <div
            className={`${vizSensorCardStyles.circle} ${
              visible[cardNumber] ? vizSensorCardStyles.show : ""
            }`}
          />
        )}
      </div>
    </VizSensor>
  )
}

export default VizSensorCard
