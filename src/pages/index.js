import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Head from "../components/Head"

import indexStyles from "./index.module.scss"

const IndexPage = () => {
  const [visibleHeaderLetters, setVisibleHeaderLetters] = useState([])
  const [visibleParagraphLetters, setVisibleParagraphLetters] = useState([])
  const [visibleQuestionLetters, setVisibleQuestionLetters] = useState([])
  const [userInput, setUserInput] = useState("")

  const headerString = "Hi, I'm Adam. Welcome!"
  const paragraphString =
    "I'm a software developer from Sweden. This is where I collect things I've made and written as well as resources I find useful. I hope you'll find it interesting :)"
  const questionString = "How are you doing today?"

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

  const timerFunc = (headerString, paragraphString, questionString) => {
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
        } else if (visibleQuestionLetters.length <= questionString.length) {
          printFunction(
            questionString,
            visibleQuestionLetters,
            setVisibleQuestionLetters
          )
        }
      },
      (visibleHeaderLetters.length - 1 === headerString.length &&
        visibleParagraphLetters.length === 1) ||
        (visibleParagraphLetters.length - 1 === paragraphString.length &&
          visibleQuestionLetters.length === 1)
        ? 900
        : randomNumberInRange(20, 70)
    )

    if (visibleQuestionLetters.length - 1 === questionString.length) {
      clearInterval(timer)
    }
  }

  timerFunc(headerString, paragraphString, questionString)

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
          {visibleParagraphLetters.length > 1 && visibleQuestionLetters < 2 && (
            <span className={indexStyles.blinking}> |</span>
          )}
        </p>
        <p>
          {visibleQuestionLetters.length > 0 &&
            visibleQuestionLetters.map((letter, index) => (
              <span key={index}>{letter}</span>
            ))}
        </p>
        <form
          name="greeting"
          method="post"
          action="/pages/success"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="greeting" />
          <textarea
            type="text"
            className={indexStyles.userAnswer}
            onKeyUp={e => {
              setUserInput(e.target.value)
            }}
            autoFocus
          />
          {userInput ? (
            <button type="submit" className={indexStyles.submit}>
              {" "}
              <Link to="/success" state={{ modal: true }}>
                Send!
              </Link>
            </button>
          ) : (
            <div className={indexStyles.buttonPlaceholder} />
          )}
        </form>
      </section>
    </Layout>
  )
}

export default IndexPage
