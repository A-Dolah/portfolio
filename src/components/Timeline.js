import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import VizSensor from "react-visibility-sensor"
import timelineStyles from "./timeline.module.scss"

const Timeline = () => {
  const [visible, setVisible] = useState({
    one: true,
    two: true,
    three: false,
    four: false,
    five: false,
    six: false,
    seven: false,
    eight: false,
    nine: false,
    ten: false,
  })
  const [pictureDimensionExtension, setPictureDimensionExtension] = useState(
    "Browser"
  )

  useEffect(() => {
    if (window.innerWidth < 630) {
      setPictureDimensionExtension("Mobile")
    }
  }, [setPictureDimensionExtension])

  const data = useStaticQuery(graphql`
    query {
      studentBrowser: file(relativePath: { eq: "images/student.jpg" }) {
        childImageSharp {
          fixed(width: 250, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      studentMobile: file(relativePath: { eq: "images/student.jpg" }) {
        childImageSharp {
          fixed(width: 120, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      uppsalaBrowser: file(relativePath: { eq: "images/car.jpg" }) {
        childImageSharp {
          fixed(width: 200, height: 200, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      uppsalaMobile: file(relativePath: { eq: "images/car.jpg" }) {
        childImageSharp {
          fixed(width: 120, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      adamannikaBrowser: file(relativePath: { eq: "images/adamannika.jpg" }) {
        childImageSharp {
          fixed(width: 200, height: 200, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      adamannikaMobile: file(relativePath: { eq: "images/adamannika.jpg" }) {
        childImageSharp {
          fixed(width: 120, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      graduationBrowser: file(relativePath: { eq: "images/graduation.jpg" }) {
        childImageSharp {
          fixed(width: 200, height: 200, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      graduationMobile: file(relativePath: { eq: "images/graduation.jpg" }) {
        childImageSharp {
          fixed(width: 120, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      lundsTRBrowser: file(relativePath: { eq: "images/LundsTR.jpg" }) {
        childImageSharp {
          fixed(width: 200, height: 200, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      lundsTRMobile: file(relativePath: { eq: "images/LundsTR.jpg" }) {
        childImageSharp {
          fixed(width: 120, height: 120, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      evernoteBrowser: file(relativePath: { eq: "images/evernote.jpg" }) {
        childImageSharp {
          fixed(width: 250, height: 200, quality: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      evernoteMobile: file(relativePath: { eq: "images/evernote.jpg" }) {
        childImageSharp {
          fixed(width: 120, height: 120, quality: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      linkedinBrowser: file(relativePath: { eq: "images/linkedin.jpg" }) {
        childImageSharp {
          fixed(width: 200, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      linkedinMobile: file(relativePath: { eq: "images/linkedin.jpg" }) {
        childImageSharp {
          fixed(width: 120, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <section className={timelineStyles.section}>
      <VizSensor
        onChange={isVisible => setVisible({ ...visible, one: isVisible })}
        partialVisibility={true}
        minTopValue={400}
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
            <p>
              I graduated the Science studies and Physical education programme at
              Polhemskolan (upper secondary school) in Lund. At the time I player a lot of football and saxophone.
            </p>
            <Img
              fixed={
                data[`student${pictureDimensionExtension}`].childImageSharp
                  .fixed
              }
              className={timelineStyles.image}
              alt="graduation image"
            />
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
        minTopValue={400}
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
            <p>
              This was the year when I started my Bachelor of Laws at Uppsala University. Here is me, my sister and my dad in the moving truck on our way to Uppsala.
            </p>
            <Img
              fixed={
                data[`uppsala${pictureDimensionExtension}`].childImageSharp
                  .fixed
              }
              className={timelineStyles.image}
              alt="image in car"
            />
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
        minTopValue={400}
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
            <h1>2014</h1>
            <p>
              After finishing my Bachelor I continued with my Master of Laws at Uppsala University. During
              this time I met my lovely girlfriend Annika.
            </p>
            <Img
              fixed={
                data[`adamannika${pictureDimensionExtension}`].childImageSharp.fixed
              }
              className={timelineStyles.image}
              alt="couple on prom"
            />
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
        minTopValue={400}
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
            <h1>2015</h1>
            <p>
              I graduated from Uppsala University in June. The same summer I
              started to work for the biggest law firm in the Nordics - Mannheimer Swartling.
            </p>
            <Img
              fixed={
                data[`graduation${pictureDimensionExtension}`].childImageSharp
                  .fixed
              }
              className={timelineStyles.image}
              alt="graduation picture"
            />
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
        minTopValue={400}
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
            <h1>2016-2017</h1>
            <p>During this time I did my clerkship at Lund District Court. I learnt a lot during this time, not only from a legal perspective but also from meeting so many different kinds of people from all over society.</p>
            <Img
              fixed={
                data[`lundsTR${pictureDimensionExtension}`].childImageSharp
                  .fixed
              }
              className={timelineStyles.image}
              alt="picture of Lund District Court"
            />
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
        minTopValue={400}
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
            <h1>2018</h1>
            <p>
              After finishing my clerkship, I returned to Mannheimer Swartling. This was also the year I wrote my first line of code. I even have an Evernote note from 2018-09-11 with the heading "First day of learning to code".
            </p>
            <Img
              fixed={
                data[`evernote${pictureDimensionExtension}`].childImageSharp
                  .fixed
              }
              className={timelineStyles.image}
              alt="screenshot of Evernote note"
            />
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
        minTopValue={400}
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
            <h1>2019</h1>
            <p>
              In 2019, I started to work for the tech-focused law firm Synch.
              This was also the year when I decided to follow my passion and
              pursue a career in programming. I applied to{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://salt.study/"
              >
                School of Applied Technology
              </a>{" "}
              and all of a sudden everything changed!
            </p>
            <Img
              fixed={
                data[`linkedin${pictureDimensionExtension}`].childImageSharp
                  .fixed
              }
              className={timelineStyles.image}
              alt="screenshot linkedin post"
            />
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
        minTopValue={400}
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
            <h1>2020</h1>
            <p>
              At the end of the School of Applied Technology Bootcamp, I was
              offered to stay as an instructor. This was an opportunity too good
              to turn down, so now you find me at{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://weareepicenter.com/stockholm/"
              >
                Epicenter
              </a>
              , where we're teaching the next batch of fantastic developers!
            </p>
          </div>
          <div
            className={`${timelineStyles.circle} ${
              visible.eight ? timelineStyles.show : ""
              }`}
          ></div>
        </div>
      </VizSensor>
    </section>
  )
}

export default Timeline
