import React, { useState } from "react"
import { navigate } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

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
        : randomNumberInRange(2, 7)
    )

    if (visibleQuestionLetters.length - 1 === questionString.length) {
      clearInterval(timer)
    }
  }

  timerFunc(headerString, paragraphString, questionString)

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
          action="/success"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={() => {
            navigate("/success", {
              state: { modal: true },
            })
          }}
        >
          <input type="hidden" name="form-name" value="greeting" />
          {visibleQuestionLetters.length - 1 === questionString.length && (
            <textarea
              type="text"
              name="greeting"
              className={indexStyles.userAnswer}
              onChange={e => {
                setUserInput(e.target.value)
              }}
              autoFocus
              maxLength={60}
              value={userInput}
            />
          )}
          {userInput ? (
            <button type="submit" className={indexStyles.submit}>
              Let me know!
            </button>
          ) : (
            <div className={indexStyles.buttonPlaceholder} />
          )}
        </form>
      </section>
      <div className={indexStyles.arrow} />
      <section className={indexStyles.informationSection}></section>
    </Layout>
  )
}

export default IndexPage
