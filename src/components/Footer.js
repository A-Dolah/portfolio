import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer>
      <p>
        Created by {data.site.siteMetadata.author}, @ 2019{" "}
        {new Date().getFullYear() !== 2019 && ` - ${new Date().getFullYear()}`}
      </p>
    </footer>
  )
}

export default Footer
