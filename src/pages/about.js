import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>About me</h1>
    <p>Here is more info about me</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About;