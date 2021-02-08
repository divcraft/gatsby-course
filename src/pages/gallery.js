import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Galeria" />
    <h1>Gallery page</h1>
    <p>Welcome to page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
