import React from "react"
import PropTypes from "prop-types"

import "../scss/main.scss"

const SectionLayout = (props) => (
  <section className={`section ${ props.className }`}>
    <div className="section-content">
      {props.children}
    </div>
  </section>
)

SectionLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default SectionLayout
