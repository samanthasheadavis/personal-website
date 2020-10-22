import React from "react";
import { Link } from "gatsby";
import projectsJSON from "../content/projects.json";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ListItem from "../components/listItem";

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Projects</h1>
    {projectsJSON.map((project) => (
      <ListItem {...project} />
    ))}
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default Projects;
