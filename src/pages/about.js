import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import "./style.css";

const About = () => (
  <Layout>
    <SEO title="About" />
    <div className="container">
      <div className="bodyColorBlock" />
      <div className="mainText">
        <h1>About me</h1>
        <h2>I want my code to help people</h2>
        <p>
          I currently work as a front end engineer specializing in React Native
          at EBSCO Information Services. I love working to support a mission I
          believe in: helping students, universities, and research professionals
          get information (i.e. research articles, medical journals) when and
          how they need it. Leveraging online resources has become even more
          important since the outset of Covid-19, when going to public or
          university libraries isn’t an option, and that’s a big part of what
          gets me up in the morning.
        </p>
        <h2>Learning is how I got here</h2>
        <p>
          The ability to learn new languages, frameworks, or approaches to
          solving problems is a big part of why I love being an engineer. My
          entire career thus far has been one giant learning curve. After
          getting hired at Get Spiffy, I spent my first week working through a
          book on Ruby on Rails in order to start fixing bugs on their back end,
          and after that several books on React Native, to start work on the
          Spiffy Technician App. During my time at EBSCO I’ve been given many
          opportunities to learn, from trainings on AWS to figuring out our
          testing strategy to trying my hand at Android development with Java.
        </p>

        <h2>It’s all about communication</h2>
        <p>
          I majored in communication studies at UNC thinking that I’d end up
          going into marketing or PR, because I love to write, edit, and think
          about the best way to convey my message. After taking a few classes
          that involved coding I realized that I could use those skills to build
          stuff as well as communicate effectively, a very important aspect of
          working with other developers as well as project leads, customer
          support, and other stakeholders.
        </p>
        <p>
          Another aspect of good communication that’s important to me is
          building relationships. Knowledge transfer and mentorship can happen
          during everyday conversations, even if my teammates are in different
          time zones or working from home. Collaboration is easier when you’ve
          built a good foundation of trust and mutual respect.
        </p>

        <h2>I’m into the details</h2>
        <p>
          Probably the most intrinsically enjoyable aspect of working with code
          for me is solving puzzles. Diagnosing bugs, reading through PRs, or
          finding the most descriptive variable name are activities I can dive
          into and lose myself in. I pride myself as a top-notch PR reviewer not
          because I know more than my teammates but because I take the time to
          dig into the code, run the edge cases and think about non-functional
          requirements like accessibility and cross-browser functionality.
        </p>

        <h2>About that coding bootcamp…</h2>
        <p>
          My entry to the world of software engineering was not the traditional
          computer science degree, but my alternative background has benefitted
          me in several ways.
        </p>
        <p>
          My B.A in communication studies from UNC Chapel Hill was where I first
          sparked an interest in coding. It also honed my presenting skills and
          was the nucleus of several marketing, PR, and UX/SEO internships and
          experiences that gave me a taste of what it was like working in higher
          education, the nonprofit industry, and, very briefly, Google. My minor
          in entrepreneurship taught me to problem solve based on customer needs
          and got me involved in the active startup community of the research
          triangle in NC (Raleigh, Durham, and Chapel Hill). The heavy emphasis
          on peer critique for my minor and honors thesis in Poetry honed my
          writing skills as well as my ability to give (and receive)
          constructive feedback.
        </p>
        <p>
          After college I decided to join a coding bootcamp because I’d really
          enjoyed my experiences writing code for school and thought I could
          leverage it as a skill working for a startup. However, the more I got
          into it the more I fell in love with the collaboration, learning,
          problem solving, and other processes innate to software development. I
          decided that I wanted to pursue it as my career.
        </p>
        <p>
          I’d argue that the greatest experience the smorgasbord of my education
          has provided me with is the ability to work with people— in tiny
          startups, in large corporations, and across teams and disciplines— and
          that has been the most rewarding experience of all.
        </p>
      </div>
    </div>
  </Layout>
);

export default About;
