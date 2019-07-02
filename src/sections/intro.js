import React from "react"
import Section from "../components/section-layout"
import FluidImage from "../components/fluid-image"

const Intro = () => (
  <Section className="gray-background intro-section">
    <h2>We the ones getting married</h2>
    <div className="fifty-fifty-row">
      <div className="column">
        <FluidImage
          filename="mar.png"
          className="betrothed-img-wrapper"
          style={{
            borderRadius:"50% 50%",
            maxWidth:"350px",
            maxHeight:"350px",
            border: "10px solid #f3e7a8"
          }}/>
          <div className="betrothed-wrapper">
            <h3>Mariecar Peñano&nbsp;Mendoza</h3>
            <p>Daughter of Mr. Dominador &<br/>Mrs. Adelaida Mendoza.</p>
            <p><strong>AKA Marbo, Tita Diva, PartyCar</strong></p>
          </div>
      </div>
      <div className="column">
        <FluidImage
          filename="dan.png"
          className="betrothed-img-wrapper"
          style={{
            borderRadius:"50% 50%",
            maxWidth:"350px",
            maxHeight:"350px",
            border: "10px solid #f3e7a8"
          }}/>
        <div className="betrothed-wrapper">
          <h3>Daniel Patrick&nbsp;Wood</h3>
          <p>Son of Mr. Sean &<br/>Mrs. Sheila Wood</p>
          <p><strong>AKA Danbo, Danny Boy, Rodan</strong></p>
        </div>
      </div>
    </div>
  </Section>
)

export default Intro
