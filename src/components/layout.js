import React from "react"

import Header from "./header"
import Footer from "./Footer"
import Styles from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={Styles.container}>
      <div className={Styles.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
