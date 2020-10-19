import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import VizSensorCard from "./VizSensorCard"

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
      student: file(relativePath: { eq: "images/student.jpg" }) {
        childImageSharp {
          fixed(width: 250, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      uppsala: file(relativePath: { eq: "images/car.jpg" }) {
        childImageSharp {
          fixed(width: 200, height: 200, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      adamannika: file(relativePath: { eq: "images/adamannika.jpg" }) {
        childImageSharp {
          fixed(width: 200, height: 200, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      graduation: file(relativePath: { eq: "images/graduation.jpg" }) {
        childImageSharp {
          fixed(width: 200, height: 200, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      lundsTR: file(relativePath: { eq: "images/LundsTR.jpg" }) {
        childImageSharp {
          fixed(width: 200, height: 200, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      evernote: file(relativePath: { eq: "images/evernote.jpg" }) {
        childImageSharp {
          fixed(width: 250, height: 200, quality: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      linkedin: file(relativePath: { eq: "images/linkedin.jpg" }) {
        childImageSharp {
          fixed(width: 200, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      saltpic: file(relativePath: { eq: "images/saltpic.jpg" }) {
        childImageSharp {
          fixed(width: 200, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <section className={timelineStyles.section}>
      <VizSensorCard
        visible={visible}
        setVisible={setVisible}
        pictureDimensionExtension={pictureDimensionExtension}
        data={data}
        year="2010"
        text="This year I graduated the Science studies and Physical education programme
              at Polhemskolan (upper secondary school) in Lund."
        cardNumber="one"
        image="student"
        alt="picture of high school graduation"
      />
      <VizSensorCard
        visible={visible}
        setVisible={setVisible}
        pictureDimensionExtension={pictureDimensionExtension}
        data={data}
        year="2011"
        text="Shortly after graduating upper secondary school I started my Bachelor of Laws at Uppsala
              University. Here is me, my sister and my dad in the moving truck
              on our way to Uppsala."
        cardNumber="two"
        image="uppsala"
        alt="picture of car ride with family"
      />
      <VizSensorCard
        visible={visible}
        setVisible={setVisible}
        pictureDimensionExtension={pictureDimensionExtension}
        data={data}
        year="2014"
        text="After finishing my Bachelor I continued with my Masters of Laws at
              Uppsala University. This was also the year during which I met my lovely girlfriend
              Annika."
        cardNumber="three"
        image="adamannika"
        alt="picture of Adam with girlfriend"
      />
      <VizSensorCard
        visible={visible}
        setVisible={setVisible}
        pictureDimensionExtension={pictureDimensionExtension}
        data={data}
        year="2015"
        text="I graduated from Uppsala University in June 2015. The same summer I
              started to work for Mannheimer Swartling which is the biggest law firm in the Nordics."
        cardNumber="four"
        image="graduation"
        alt="picture of graduation in Uppsala"
      />
      <VizSensorCard
        visible={visible}
        setVisible={setVisible}
        pictureDimensionExtension={pictureDimensionExtension}
        data={data}
        year="2016-2017"
        text="During this period I did my clerkship at Lund District Court. This was an important learning experience, not only from a legal perspective but also through meeting so many different kinds of people from all over society."
        cardNumber="five"
        image="lundsTR"
        alt="picture of Lund District Court"
      />
      <VizSensorCard
        visible={visible}
        setVisible={setVisible}
        pictureDimensionExtension={pictureDimensionExtension}
        data={data}
        year="2018"
        text="After finishing my clerkship, I returned to Mannheimer Swartling.
              This was also the year I wrote my first line of code. I even have
              an Evernote note from 2018-09-11 with the heading 'First day of
              learning to code'"
        cardNumber="seven"
        image="evernote"
        alt="picture of Evernote note"
      />
      <VizSensorCard
        visible={visible}
        setVisible={setVisible}
        pictureDimensionExtension={pictureDimensionExtension}
        data={data}
        year="2019"
        text="This year I started to work for the tech-focused law firm Synch.
              This was also the year when I decided to follow my passion and
              pursue a career in programming. I applied to School of Applied Technology
              and all of a sudden I was on a new career path!"
        cardNumber="eight"
        image="linkedin"
        alt="picture of Linkedin post"
      />
      <VizSensorCard
        visible={visible}
        setVisible={setVisible}
        pictureDimensionExtension={pictureDimensionExtension}
        data={data}
        year="2020"
        text="At the end of the School of Applied Technology Bootcamp, I was
              offered to stay as an instructor. This was an opportunity too good
              to turn down, so now you find me at Epicenter, where we're teaching the next batch of fantastic developers!"
        cardNumber="nine"
        image="saltpic"
        alt="picture of Adam at Salt giving lecture"
      />
    </section>
  )
}

export default Timeline
