import React, { useState } from "react"
import Layout from "../components/Layout"
import Head from "../components/Head"

import indexStyles from "./index.module.scss"

const IndexPage = () => {
  const [visibleHeaderLetters, setVisibleHeaderLetters] = useState([])
  const [visibleParagraphLetters, setVisibleParagraphLetters] = useState([])
  const [visitorInput, setVisitorInput] = useState("")

  const headerString = "Hi, I'm Adam. Welcome!"
  const paragraphString =
    "I'm a software developer from Sweden. It's good to have you here. May I ask what brings you :)?"

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

  const onChange = e => {
    setVisitorInput(e.target.value)
  }

  timerFunc(headerString, paragraphString)

  return (
    <Layout>
      <Head title="Home" />
      <section className={indexStyles.section}>
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
          {visibleParagraphLetters.length > 1 &&
            visibleParagraphLetters.length < paragraphString.length && (
              <span className={indexStyles.blinking}> |</span>
            )}
        </p>
        <input
          type="text"
          className={indexStyles.inputField}
          autoFocus
          onChange={onChange}
        />
      </section>
    </Layout>
  )
}

export default IndexPage
