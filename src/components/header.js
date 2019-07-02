import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import FluidImage from "./fluid-image"

const Header = ({ siteTitle }) => (
  <header className="fifty-fifty-row-m"
    style={{
      background: `black`,
      height: `100vh`,
      alignItems: 'center',
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
      <FluidImage filename="hero-image.png" />
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
