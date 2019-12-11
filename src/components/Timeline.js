import React, { useState } from "react"
import VizSensor from "react-visibility-sensor"
import timelineStyles from "./timeline.module.scss"

const Timeline = () => {
  const [visible, setVisible] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
    seven: false,
    eight: false,
    nine: false,
    ten: false,
  })

  const onClick = num => {
    setVisible({ ...visible, [num]: !visible[num] })
  }

  return (
    <section className={timelineStyles.section}>
      <VizSensor
        onChange={isVisible => setVisible({ ...visible, one: isVisible })}
        minTopValue={400}
      >
        <div
          className={`${timelineStyles.divContainer} ${
            visible.one ? timelineStyles.show : ""
          }`}
        >
          <h1>2010-2015</h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          deleniti quod corrupti aperiam nihil magni ad nobis repellendus
          voluptatibus veritatis fugit molestias nisi molestiae ea mollitia unde
          delectus, quam natus?
          <div
            className={`${timelineStyles.circle} ${
              visible.one ? timelineStyles.show : ""
            }`}
          ></div>
        </div>
      </VizSensor>
      <VizSensor
        onChange={isVisible => setVisible({ ...visible, two: isVisible })}
        minTopValue={400}
      >
        <div
          className={`${timelineStyles.divContainer} ${
            visible.two ? timelineStyles.show : ""
          }`}
        >
          <h1>2015-2017</h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          deleniti quod corrupti aperiam nihil magni ad nobis repellendus
          voluptatibus veritatis fugit molestias nisi molestiae ea mollitia unde
          delectus, quam natus?
          <div
            className={`${timelineStyles.circle} ${
              visible.two ? timelineStyles.show : ""
            }`}
          ></div>
        </div>
      </VizSensor>
      <VizSensor
        onChange={isVisible => setVisible({ ...visible, three: isVisible })}
        minTopValue={400}
      >
        <div
          className={`${timelineStyles.divContainer} ${
            visible.three ? timelineStyles.show : ""
          }`}
        >
          <h1>2017-2018</h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          deleniti quod corrupti aperiam nihil magni ad nobis repellendus
          voluptatibus veritatis fugit molestias nisi molestiae ea mollitia unde
          delectus, quam natus?
          <div
            className={`${timelineStyles.circle} ${
              visible.three ? timelineStyles.show : ""
            }`}
          ></div>
        </div>
      </VizSensor>
      <VizSensor
        onChange={isVisible => setVisible({ ...visible, four: isVisible })}
        minTopValue={400}
      >
        <div
          className={`${timelineStyles.divContainer} ${
            visible.four ? timelineStyles.show : ""
          }`}
        >
          <h1>2018</h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          deleniti quod corrupti aperiam nihil magni ad nobis repellendus
          voluptatibus veritatis fugit molestias nisi molestiae ea mollitia unde
          delectus, quam natus?
          <div
            className={`${timelineStyles.circle} ${
              visible.four ? timelineStyles.show : ""
            }`}
          ></div>
        </div>
      </VizSensor>
      <VizSensor
        onChange={isVisible => setVisible({ ...visible, five: isVisible })}
        minTopValue={400}
      >
        <div
          className={`${timelineStyles.divContainer} ${
            visible.five ? timelineStyles.show : ""
          }`}
        >
          <h1>2019</h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          deleniti quod corrupti aperiam nihil magni ad nobis repellendus
          voluptatibus veritatis fugit molestias nisi molestiae ea mollitia unde
          delectus, quam natus?
          <div
            className={`${timelineStyles.circle} ${
              visible.five ? timelineStyles.show : ""
            }`}
          ></div>
        </div>
      </VizSensor>
      <VizSensor
        onChange={isVisible => setVisible({ ...visible, six: isVisible })}
        minTopValue={400}
      >
        <div
          className={`${timelineStyles.divContainer} ${
            visible.six ? timelineStyles.show : ""
          }`}
        >
          <h1>2020 - </h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          deleniti quod corrupti aperiam nihil magni ad nobis repellendus
          voluptatibus veritatis fugit molestias nisi molestiae ea mollitia unde
          delectus, quam natus?
          <div
            className={`${timelineStyles.circle} ${
              visible.six ? timelineStyles.show : ""
            }`}
          ></div>
        </div>
      </VizSensor>
      <VizSensor
        onChange={isVisible => setVisible({ ...visible, seven: isVisible })}
        minTopValue={400}
      >
        <div
          className={`${timelineStyles.divContainer} ${
            visible.seven ? timelineStyles.show : ""
          }`}
        >
          <h1>2020-2022</h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          deleniti quod corrupti aperiam nihil magni ad nobis repellendus
          voluptatibus veritatis fugit molestias nisi molestiae ea mollitia unde
          delectus, quam natus?
          <div
            className={`${timelineStyles.circle} ${
              visible.seven ? timelineStyles.show : ""
            }`}
          ></div>
        </div>
      </VizSensor>
      <VizSensor
        onChange={isVisible => setVisible({ ...visible, eight: isVisible })}
        minTopValue={400}
      >
        <div
          className={`${timelineStyles.divContainer} ${
            visible.eight ? timelineStyles.show : ""
          }`}
        >
          <h1>2022-2024</h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          deleniti quod corrupti aperiam nihil magni ad nobis repellendus
          voluptatibus veritatis fugit molestias nisi molestiae ea mollitia unde
          delectus, quam natus?
          <div
            className={`${timelineStyles.circle} ${
              visible.eight ? timelineStyles.show : ""
            }`}
          ></div>
        </div>
      </VizSensor>
      <VizSensor
        onChange={isVisible => setVisible({ ...visible, nine: isVisible })}
        minTopValue={400}
      >
        <div
          className={`${timelineStyles.divContainer} ${
            visible.nine ? timelineStyles.show : ""
          }`}
        >
          <h1>2024-2026</h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          deleniti quod corrupti aperiam nihil magni ad nobis repellendus
          voluptatibus veritatis fugit molestias nisi molestiae ea mollitia unde
          delectus, quam natus?
          <div
            className={`${timelineStyles.circle} ${
              visible.nine ? timelineStyles.show : ""
            }`}
          ></div>
        </div>
      </VizSensor>
      <VizSensor
        onChange={isVisible => setVisible({ ...visible, ten: isVisible })}
        minTopValue={400}
      >
        <div
          className={`${timelineStyles.divContainer} ${
            visible.ten ? timelineStyles.show : ""
          }`}
        >
          <h1>2025-2028</h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          deleniti quod corrupti aperiam nihil magni ad nobis repellendus
          voluptatibus veritatis fugit molestias nisi molestiae ea mollitia unde
          delectus, quam natus?
          <div
            className={`${timelineStyles.circle} ${
              visible.ten ? timelineStyles.show : ""
            }`}
            onClick={() => onClick("ten")}
          ></div>
        </div>
      </VizSensor>
    </section>
  )
}

export default Timeline
