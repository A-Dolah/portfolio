import React, { useState } from "react"

import Layout from "../components/Layout"
import Head from "../components/Head"

import indexStyles from "./index.module.scss"
import { randomBytes } from "crypto"

const IndexPage = () => {
  const [visibleLetters, setVisibleLetters] = useState([{ index: 0 }])

  let hiddenLetters = [
    "H",
    "i",
    ",",
    " ",
    "I",
    "'",
    "m",
    " ",
    "A",
    "d",
    "a",
    "m",
    ".",
    " ",
    "W",
    "e",
    "l",
    "c",
    "o",
    "m",
    "e",
    " ",
    "t",
    "o",
    " ",
    "m",
    "y",
    " ",
    "s",
    "i",
    "t",
    "e",
    "!",
  ]

  const randomNumberInRange = (min, max) => Math.random() * (max - min) + min

  let timer

  const timerFunc = () => {
    timer = setTimeout(() => {
      const index = visibleLetters[visibleLetters.length - 1].index
      const letter = hiddenLetters.slice(index, index + 1).toString()
      setVisibleLetters([
        ...visibleLetters,
        {
          letter,
          index: visibleLetters.length,
          printTime: randomNumberInRange(100, 400),
        },
      ])
      console.log(visibleLetters[visibleLetters.length - 1].printTime)
    }, visibleLetters[visibleLetters.length - 1].printTime)
    if (
      visibleLetters[visibleLetters.length - 1].index === hiddenLetters.length
    ) {
      clearInterval(timer)
    }
  }

  timerFunc()

  return (
    <Layout>
      <Head title="Home" />
      <h1 className={indexStyles.letter}>
        {visibleLetters.length > 0 &&
          visibleLetters.map((letter, index) => {
            if (index > 0) {
              return <span key={index}>{letter.letter}</span>
            }
            return ""
          })}
      </h1>
    </Layout>
  )
}

export default IndexPage
