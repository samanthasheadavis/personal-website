import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>Hi, I'm Sam.</p>
    <p>
      I'm a <span style={{fontSize: 40}}>full stack software engineer</span>, but I didn't start out that way.
    </p>
    <p>I'm passionate about education and information. That's why I decided to change my career from marketing and SEO
      to software development right after college, by attending a three month bootcamp.
    </p>
    <p>Since then my experiences have ranged from building greenfield projects to 
      supporting large applications serving global audiences. No matter what, my approach has always 
      been based on curiosity, learning, and clear communication.
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
