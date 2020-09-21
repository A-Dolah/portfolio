import React, { useState } from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import InformationCard from "../components/InformationCard"

import indexStyles from "./index.module.scss"

const IndexPage = () => {
  const [visibleHeaderLetters, setVisibleHeaderLetters] = useState([])
  const [visibleParagraphLetters, setVisibleParagraphLetters] = useState([])

  const headerString = "Hi, I'm Adam. Welcome!"
  const paragraphString =
    "I'm a software developer from Sweden. This is where I collect things I've made and written as well as resources I find useful. I hope you'll find it interesting!"

  const randomNumberInRange = (min, max) => Math.random() * (max - min) + min

  const printFunction = (stringToPrint, state, setStateFunction) => {
    const lettersToPrint = stringToPrint.split("")
    const indexOfNextLetter = state.length - 1
    const letterToPrint = lettersToPrint.slice(
      indexOfNextLetter,
      indexOfNextLetter + 1
    )
    setStateFunction([...state, letterToPrint])
  }

  const timerFunc = (headerString, paragraphString) => {
    const timer = setTimeout(
      () => {
        if (visibleHeaderLetters.length <= headerString.length) {
          printFunction(
            headerString,
            visibleHeaderLetters,
            setVisibleHeaderLetters
          )
        } else if (visibleParagraphLetters.length <= paragraphString.length) {
          printFunction(
            paragraphString,
            visibleParagraphLetters,
            setVisibleParagraphLetters
          )
        }
      },
      visibleHeaderLetters.length - 1 === headerString.length &&
        visibleParagraphLetters.length === 1
        ? 900
        : randomNumberInRange(20, 70)
    )

    if (visibleParagraphLetters.length - 1 === paragraphString.length) {
      clearInterval(timer)
    }
  }

  timerFunc(headerString, paragraphString)

  return (
    <Layout>
      <SEO title="Home" />
      <section className={indexStyles.greetingSection}>
        <h1>
          {visibleHeaderLetters.length > 0 &&
            visibleHeaderLetters.map((letter, index) => (
              <span key={index}>{letter}</span>
            ))}
          {visibleParagraphLetters.length < 2 && (
            <span className={indexStyles.blinking}> |</span>
          )}
        </h1>
        <p>
          {visibleParagraphLetters.length > 0 &&
            visibleParagraphLetters.map((letter, index) => (
              <span key={index}>{letter}</span>
            ))}
          {visibleParagraphLetters.length > 1 && (
            <span className={indexStyles.blinking}> |</span>
          )}
        </p>
      </section>
      <div className={indexStyles.arrow} />
      <section className={indexStyles.informationSection}>
        <InformationCard
          title="I AM"
          paragraph="I'm a fullstack web developer based in Stockholm. I've previously been practicing business law before becoming a professional web developer. I do fullstack JavaScript with React as my frontend framework of choice and Node.js as my backend runtime."
          link="/me"
        />
        <InformationCard
          title="BLOG"
          paragraph="This site is mainly a place where I collect things I've written and resources I like."
          link="/blog"
        />
        <InformationCard
          title="CONTACT"
          paragraph="If you want to get in touch, please use the contact form and I'll get back to you shortly."
          link="/contact"
        />
      </section>
    </Layout>
  )
}

export default IndexPage
