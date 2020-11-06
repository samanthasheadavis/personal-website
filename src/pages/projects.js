import React from "react";
import projectsJSON from "../content/projects.json";
import "./style.css";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ListItem from "../components/listItem";

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <div className="container">
      <div className="bodyColorBlock" />
      <div className="mainText">
        <h1>Projects</h1>
        {projectsJSON.map(({ title, description, features }) => (
          <ListItem
            key={title}
            title={title}
            description={description}
            features={features}
          />
        ))}
      </div>
    </div>
  </Layout>
);

export default Projects;
