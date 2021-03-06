import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import "./style.css";

const Header = ({ siteTitle }) => (
  <header className="headerContainer">
    <Link className="headerLink" to="/">
      Home
    </Link>
    <div className="rightLinksContainer">
      <Link className="headerLink" to="/projects/">
        Projects
      </Link>{" "}
      <br />
      <Link className="headerLink" to="/about/">
        About
      </Link>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
