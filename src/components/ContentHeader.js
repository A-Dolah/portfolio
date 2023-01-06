import React from "react"
import * as contentHeaderStyles from "./contentHeader.module.scss"

const ContentHeader = ({ title, paragraph }) => {
  return (
    <header className={contentHeaderStyles.header}>
      <h1 className={contentHeaderStyles.title}>{title}</h1>
      <br />
      <p className={contentHeaderStyles.paragraph}>{paragraph}</p>
    </header>
  )
}

export default ContentHeader
