import React, { useState } from "react"
import VizSensor from "react-visibility-sensor"
import timelineStyles from "./timeline.module.scss"

const Timeline = () => {
  const [visible, setVisible] = useState({
    one: true,
    two: true,
    three: true,
    four: false,
    five: false,
    six: false,
    seven: false,
    eight: false,
    nine: false,
    ten: false,
  })

  return (
    <section className={timelineStyles.section}>
      <VizSensor
        onChange={isVisible => setVisible({ ...visible, one: isVisible })}
        partialVisibility={true}
      >
        <div
          className={`${timelineStyles.divContainer} ${
            visible.one ? timelineStyles.show : ""
          }`}
        >
          <div
            className={`${timelineStyles.content} ${
              visible.one ? timelineStyles.showContent : ""
            }`}
          >
            <h1>2010</h1>
            <p>Graduated upper secondary school in Lund.</p>
          </div>
          <div
            className={`${timelineStyles.circle} ${
              visible.one ? timelineStyles.show : ""
            }`}
          ></div>
        </div>
      </VizSensor>
      <VizSensor
        onChange={isVisible => setVisible({ ...visible, two: isVisible })}
        partialVisibility={true}
      >
        <div
          className={`${timelineStyles.divContainer} ${
            visible.two ? timelineStyles.show : ""
          }`}
        >
          <div
            className={`${timelineStyles.content} ${
              visible.two ? timelineStyles.showContent : ""
            }`}
          >
            <h1>2011</h1>
            <p>Graduated upper secondary school in Lund.</p>
          </div>
          <div
            className={`${timelineStyles.circle} ${
              visible.two ? timelineStyles.show : ""
            }`}
          ></div>
        </div>
      </VizSensor>
      <VizSensor
        onChange={isVisible => setVisible({ ...visible, three: isVisible })}
        partialVisibility={true}
      >
        <div
          className={`${timelineStyles.divContainer} ${
            visible.three ? timelineStyles.show : ""
          }`}
        >
          <div
            className={`${timelineStyles.content} ${
              visible.three ? timelineStyles.showContent : ""
            }`}
          >
            <h1>2011</h1>
            <p>Graduated upper secondary school in Lund.</p>
          </div>
          <div
            className={`${timelineStyles.circle} ${
              visible.three ? timelineStyles.show : ""
            }`}
          ></div>
        </div>
      </VizSensor>
      <VizSensor
        onChange={isVisible => setVisible({ ...visible, four: isVisible })}
        partialVisibility={true}
      >
        <div
          className={`${timelineStyles.divContainer} ${
            visible.four ? timelineStyles.show : ""
          }`}
        >
          <div
            className={`${timelineStyles.content} ${
              visible.four ? timelineStyles.showContent : ""
            }`}
          >
            <h1>2011</h1>
            <p>Graduated upper secondary school in Lund.</p>
          </div>
          <div
            className={`${timelineStyles.circle} ${
              visible.four ? timelineStyles.show : ""
            }`}
          ></div>
        </div>
      </VizSensor>
      <VizSensor
        onChange={isVisible => setVisible({ ...visible, five: isVisible })}
        partialVisibility={true}
      >
        <div
          className={`${timelineStyles.divContainer} ${
            visible.five ? timelineStyles.show : ""
          }`}
        >
          <div
            className={`${timelineStyles.content} ${
              visible.five ? timelineStyles.showContent : ""
            }`}
          >
            <h1>2011</h1>
            <p>Graduated upper secondary school in Lund.</p>
          </div>
          <div
            className={`${timelineStyles.circle} ${
              visible.five ? timelineStyles.show : ""
            }`}
          ></div>
        </div>
      </VizSensor>
      <VizSensor
        onChange={isVisible => setVisible({ ...visible, six: isVisible })}
        partialVisibility={true}
      >
        <div
          className={`${timelineStyles.divContainer} ${
            visible.six ? timelineStyles.show : ""
          }`}
        >
          <div
            className={`${timelineStyles.content} ${
              visible.six ? timelineStyles.showContent : ""
            }`}
          >
            <h1>2011</h1>
            <p>Graduated upper secondary school in Lund.</p>
          </div>
          <div
            className={`${timelineStyles.circle} ${
              visible.six ? timelineStyles.show : ""
            }`}
          ></div>
        </div>
      </VizSensor>
      <VizSensor
        onChange={isVisible => setVisible({ ...visible, seven: isVisible })}
        partialVisibility={true}
      >
        <div
          className={`${timelineStyles.divContainer} ${
            visible.seven ? timelineStyles.show : ""
          }`}
        >
          <div
            className={`${timelineStyles.content} ${
              visible.seven ? timelineStyles.showContent : ""
            }`}
          >
            <h1>2011</h1>
            <p>Graduated upper secondary school in Lund.</p>
          </div>
          <div
            className={`${timelineStyles.circle} ${
              visible.seven ? timelineStyles.show : ""
            }`}
          ></div>
        </div>
      </VizSensor>
      <VizSensor
        onChange={isVisible => setVisible({ ...visible, eight: isVisible })}
        partialVisibility={true}
      >
        <div
          className={`${timelineStyles.divContainer} ${
            visible.eight ? timelineStyles.show : ""
          }`}
        >
          <div
            className={`${timelineStyles.content} ${
              visible.eight ? timelineStyles.showContent : ""
            }`}
          >
            <h1>2011</h1>
            <p>Graduated upper secondary school in Lund.</p>
          </div>
          <div
            className={`${timelineStyles.circle} ${
              visible.eight ? timelineStyles.show : ""
            }`}
          ></div>
        </div>
      </VizSensor>
      <VizSensor
        onChange={isVisible => setVisible({ ...visible, nine: isVisible })}
        partialVisibility={true}
      >
        <div
          className={`${timelineStyles.divContainer} ${
            visible.nine ? timelineStyles.show : ""
          }`}
        >
          <div
            className={`${timelineStyles.content} ${
              visible.nine ? timelineStyles.showContent : ""
            }`}
          >
            <h1>2011</h1>
            <p>Graduated upper secondary school in Lund.</p>
          </div>
          <div
            className={`${timelineStyles.circle} ${
              visible.nine ? timelineStyles.show : ""
            }`}
          ></div>
        </div>
      </VizSensor>
      <VizSensor
        onChange={isVisible => setVisible({ ...visible, ten: isVisible })}
        partialVisibility={true}
      >
        <div
          className={`${timelineStyles.divContainer} ${
            visible.ten ? timelineStyles.show : ""
          }`}
        >
          <div
            className={`${timelineStyles.content} ${
              visible.ten ? timelineStyles.showContent : ""
            }`}
          >
            <h1>2011</h1>
            <p>Graduated upper secondary school in Lund.</p>
          </div>
          <div
            className={`${timelineStyles.circle} ${
              visible.ten ? timelineStyles.show : ""
            }`}
          ></div>
        </div>
      </VizSensor>
    </section>
  )
}

export default Timeline
