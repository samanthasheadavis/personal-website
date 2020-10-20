import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
      }}
    >
      <Link style={{marginRight: 10}} to="/projects/">Projects</Link> <br />
      <Link style={{marginRight: 10}} to="/about/">About</Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
