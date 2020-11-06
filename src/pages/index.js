import React from "react";

import Layout from "../components/layout";
import Headshot from "../components/headshot";
import SEO from "../components/seo";
import "./style.css";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <div className="body introText">
        <p>Hi, I&apos;m Sam.</p>
        <p>
          I&apos;m a{" "}
          <span style={{ fontSize: `1.75rem` }}>
            full stack software engineer,
          </span>{" "}
          but I didn&apos;t start out that way.
        </p>
      </div>
      <div className="headshotContainer">
        <div className="bodyColorBlock" />
        <div style={{ flex: 1 }}>
          <Headshot />
        </div>
        <div className="body secondaryBody">
          <p>
            I&apos;m passionate about learning and getting people the
            information they need. That&apos;s why I decided to attend a three
            month bootcamp and change my career from marketing and SEO to
            software development.
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
