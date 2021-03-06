import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
//import FluidImage from "./fluid-image"
import Video from "./video"

const Header = ({ siteTitle }) => (
  <header className="fifty-fifty-row-m"
    style={{
      background: `black`,
      justifyContent: `center`
    }}
  >
    <div className="column">
      <h1 style={{
        margin: 0,
        textAlign: `center`,
      }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div className="column">
      <Video  />
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
