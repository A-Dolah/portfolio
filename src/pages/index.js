import React, { useState } from "react"
import Layout from "../components/Layout"
import Head from "../components/Head"

import indexStyles from "./index.module.scss"

const IndexPage = () => {
  const [visibleHeaderLetters, setVisibleHeaderLetters] = useState([
    {
      letter: "",
      index: 0,
      printTime: 0,
    },
  ])
  const [visibleParagraphLetters, setVisibleParagraphLetters] = useState([
    {
      letter: "",
      index: 0,
      printTime: 0,
    },
  ])

  const headerString = "Hi, I'm Adam. Welcome!"
  const paragraphString =
    "I'm a software developer and bootcamp instructor from Sweden, currently working from Stockholm. I hope you'll find something interesting while visiting :)!"

  const randomNumberInRange = (min, max) => Math.random() * (max - min) + min

  const printFunction = (stringToPrint, state, setStateFunction) => {
    const lettersToPrint = stringToPrint.split("")
    const indexOfNextLetter = state[state.length - 1].index
    const letterToPrint = lettersToPrint.slice(
      indexOfNextLetter,
      indexOfNextLetter + 1
    )
    setStateFunction([
      ...state,
      {
        letter: letterToPrint,
        index: state.length,
      },
    ])
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
      visibleHeaderLetters[visibleHeaderLetters.length - 1].index ===
        headerString.length && visibleParagraphLetters.length === 1
        ? 1000
        : randomNumberInRange(30, 100)
    )

    if (
      visibleParagraphLetters[visibleParagraphLetters.length - 1].index ===
      paragraphString.length
    ) {
      clearInterval(timer)
    }
  }

  timerFunc(headerString, paragraphString)

  return (
    <Layout>
      <Head title="Home" />
      <section className={indexStyles.section}>
        <h1>
          {visibleHeaderLetters.length > 0 &&
            visibleHeaderLetters.map((letter, index) => (
              <span key={index}>{letter.letter}</span>
            ))}
          {visibleParagraphLetters.length < 2 && (
            <span className={indexStyles.blinking}> |</span>
          )}
        </h1>
        <p>
          {visibleParagraphLetters.length > 0 &&
            visibleParagraphLetters.map((letter, index) => (
              <span key={index}>{letter.letter}</span>
            ))}
          {visibleParagraphLetters.length > 1 && (
            <span className={indexStyles.blinkingLine}> |</span>
          )}
        </p>
      </section>
    </Layout>
  )
}

export default IndexPage
