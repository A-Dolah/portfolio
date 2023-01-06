import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as footerStyles from "./footer.module.scss"
import linkedin from "../../static/linkedin.png"
import github from "../../static/github.png"
import twitter from "../../static/twitter.png"

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
    <footer className={footerStyles.footer}>
      <p>
        Created by {data.site.siteMetadata.author}, @ 2019{" "}
        {new Date().getFullYear() !== 2019 && ` - ${new Date().getFullYear()}`}
      </p>
      <ul className={footerStyles.socialMedia}>
        <li>
          <a
            href="https://www.linkedin.com/in/adam-dolah-35790993/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="linkedin logo" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/A-Dolah"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github logo" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/AdamDolah_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="twitter logo" />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
