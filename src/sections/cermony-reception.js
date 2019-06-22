import React from "react"
import logoUrl from '../images/jmb-logo.svg'
import Map from "../components/map"

import Ceremony from "./ceremony"
import Reception from "./reception"

const CeremonyReception = () => (
  <div className="section-ceremony-reception">
    <div className="top-section">
      <Ceremony />
      <figure className="image-wrapper">
        <img src={logoUrl} alt="logo"/>
      </figure>
      <Reception />
    </div>
    <div className="dress-code">
      <p><strong>Dress code: Fashionably Formal</strong></p>
    </div>
    <Map />
  </div>
)

export default CeremonyReception
