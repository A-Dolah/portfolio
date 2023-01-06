import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import * as headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          thaiTitle
        }
      }
    }
  `)
  return (
    <header className={headerStyles.header}>
      <h1 className={headerStyles.titleContainer}>
        <Link
          className={headerStyles.title}
          to="/"
          data-title={data.site.siteMetadata.title}
          data-thai={data.site.siteMetadata.thaiTitle}
        ></Link>
      </h1>
      <nav className={headerStyles.navContainer}>
        <label htmlFor="toggle">&#9776;</label>
        <input type="checkbox" id="toggle" />
        <ul className={headerStyles.navList}>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/blog"
            >
              Written
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/reading"
            >
              Reading
            </Link>
          </li>
          <li>
            {" "}
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/me"
            >
              Me
            </Link>
          </li>
          <li>
            {" "}
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
