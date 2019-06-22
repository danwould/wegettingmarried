import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import FluidImage from "./fluid-image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
      height: `100vh`,
      display: `flex`,
      alignItems: 'center',
      justifyContent: `center`
    }}
  >
    <div
      style={{
        width: `50%`,
        padding: `0 0 0 1.0875rem`,
      }}
    >
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
    <div
      style={{
        width: `50%`
      }}
    >
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
