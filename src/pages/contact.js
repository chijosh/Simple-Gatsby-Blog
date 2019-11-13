import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>
        The best way to reach me is via my twitter account
        <a
          href="https://twitter.com/IamChiJosh"
          target="_blank"
          rel="noopener noreferrer"
        >
          @IamChiJosh
        </a>
        .
      </p>
    </Layout>
  )
}

export default ContactPage
