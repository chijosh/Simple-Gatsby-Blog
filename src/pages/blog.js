import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Head from "../components/head"
import Layout from "../components/layout"
import Styles from "./blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: ASC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY", fromNow: true)
          }
        }
      }
    }
  `)
  console.log(data)

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blogs</h1>
      <ol className={Styles.posts}>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li className={Styles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
