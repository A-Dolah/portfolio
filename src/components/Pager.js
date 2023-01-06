import React from "react"
import { Link } from "gatsby"

import * as pagerStyles from "./pager.module.scss"

const Pager = ({ pageContext }) => {
  const { previousPagePath, nextPagePath } = pageContext
  return (
    <div className={pagerStyles.container}>
      {previousPagePath && (
        <span className={pagerStyles.span}>
          <Link to={previousPagePath}>Previous</Link>
        </span>
      )}
      {nextPagePath && (
        <span className={pagerStyles.span}>
          <Link to={nextPagePath}>Next</Link>
        </span>
      )}
    </div>
  )
}

export default Pager
