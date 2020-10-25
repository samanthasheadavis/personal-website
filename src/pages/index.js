import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Headshot from "../components/headshot";
import SEO from "../components/seo";
import "./index.css";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <div className="body introText">
        <p>Hi, I'm Sam.</p>
        <p>
          I'm a full stack software engineer, but I didn't start out that way.
        </p>
      </div>
      <div className="headshotContainer">
        <div style={{ flex: 1 }}>
          <Headshot />
        </div>
        <div className="body secondaryBody">
          <p>
            I'm passionate about learning and getting people the information
            they need. That's why I decided to attend a three month bootcamp and
            change my career from marketing and SEO to software development.
          </p>
          <p>
            Since then my experiences have ranged from building greenfield
            projects to supporting large applications serving global audiences.
            No matter what, my approach has always been based on curiosity,
            learning, and clear communication.
          </p>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
