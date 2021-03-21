import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NewStaticQuery from "../components/newsq"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <NewStaticQuery />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <Link to="/test-template">Test template</Link>
  </Layout>
)

export default SecondPage
