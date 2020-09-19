import React, { useState } from "react"
import { navigate } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import encode from "../utils/encode"

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
        : randomNumberInRange(2, 7)
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
      <section className={indexStyles.informationSection}></section>
    </Layout>
  )
}

export default IndexPage
