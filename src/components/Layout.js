import React from "react"
import "normalize.css/normalize.css"
import "typeface-oswald"
import Header from "./Header"
import Footer from "./Footer"
import "../styles/index.scss"
import * as layoutStyles from "./layout.module.scss"

const Layout = props => (
  <div className={`${layoutStyles.container} container`}>
    <Header />
    <div className={layoutStyles.content}>{props.children}</div>
    <Footer />
  </div>
)

export default Layout
