import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Styles from "./footer.module.scss"

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
  let date = new Date()
  let year = date.getFullYear()
  return (
    <footer className={Styles.footer}>
      <p>
        Created by {data.site.siteMetadata.author}, © {year}
      </p>
    </footer>
  )
}

export default Footer
