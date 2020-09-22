import React from "react"
import Img from "gatsby-image"
import VizSensor from "react-visibility-sensor"

import vizSensorCardStyles from "./vizSensorCard.module.scss"

const VizSensorCard = ({
  visible,
  setVisible,
  pictureDimensionExtension,
  data,
  year,
  text,
  cardNumber,
  image,
}) => {
  const onChange = isVisible => {
    setVisible({ ...visible, [cardNumber]: isVisible })
  }
  return (
    <VizSensor onChange={onChange} partialVisibility={true} minTopValue={400}>
      <div
        className={`${vizSensorCardStyles.divContainer} ${
          visible[cardNumber] ? vizSensorCardStyles.show : ""
        }`}
      >
        <div
          className={`${vizSensorCardStyles.content} ${
            visible[cardNumber] ? vizSensorCardStyles.showContent : ""
          }`}
        >
          <h1>{year}</h1>
          <p>{text}</p>
          {image && (
            <Img
              fixed={image && data[image].childImageSharp.fixed}
              className={vizSensorCardStyles.image}
              alt="graduation image"
            />
          )}
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
