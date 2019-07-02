import React from "react"

import Section from "../components/section-layout"
import Form from "../components/form"

const Rsvp = ({ props }) => (
        <Section className="section-rsvp">
          <div className="fifty-fifty-row-m">
            <div className="column">
              <h2>Did we miss anything?</h2>
              <p>Drop us a note and let us know!</p>
            </div>
            <div className="column">
              <Form />
            </div>
          </div>
        </Section>
)

export default Rsvp
