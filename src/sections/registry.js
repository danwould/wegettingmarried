import React from "react"
import Section from "../components/section-layout"
import honeyFundIcon from "../images/honeymoon-icon.svg"
import ribbonIcon from "../images/ribbon-icon.svg"
import giftIcon from "../images/giftbox-icon.svg"
import heathLogo from "../images/heath-logo.svg"
import candbLogo from "../images/c-and-b-logo.svg"

const Registry = () => (
  <Section className="section-registry gray-background">
    <h2>Registry</h2>
    <div className="top-section fifty-fifty-row">
      <section className="section section-honeyfund column gray-background">
        <img src={honeyFundIcon} alt="logo" className="icon"/>
        <h3>Honeyfund</h3>
        <p>Contributions to the couple’s honeymoon fund can be made by check <strong>(payable to Mariecar Mendoza & Dan Wood)</strong></p>
        <p>Or find us on Venmo <strong>@Maridan</strong></p>
      </section>

      <section className="section section-mikeyfund column gray-background">
        <img src={ribbonIcon} alt="logo" className="icon"/>
        <h3>In honor of Mikey</h3>
        <p>Donations to the UC San Diego cancer research fund in memory of our beloved <strong>Michael G. Wood</strong>, brother of the groom whom we lost to <a href="https://health.ucsd.edu/specialties/cancer/programs/gastrointestinal/Pages/gist.aspx" target="_blank" rel="noopener noreferrer">GIST</a></p>
        <p>In the memo line: <strong>Fund #2570 - SDH Research Fund.</strong></p>
        <a href="http://bit.ly/Donate4Mikey" target="_blank" rel="noopener noreferrer" className="button">Donate</a>
      </section>
    </div>

    <section className="section bottom-section section-gifts gray-background">
      <img src={giftIcon} alt="logo" className="icon"/>
      <h3>Gifts</h3>
      <p>Presents may be purchased at the following retailers:</p>
      <div className="logo-wrapper fifty-fifty-row-s">
        <div className="column">
          <a href="http://www.heathceramics.com/apps/giftregistry/registry/77543?shared_url=true" target="_blank" rel="noopener noreferrer">
            <img src={heathLogo} alt="logo"/>
          </a>
        </div>
        <div className="column">
          <a href="https://www.crateandbarrel.com/gift-registry/dan-wood-and-mariecar-mendoza/r5989831" target="_blank" rel="noopener noreferrer">
            <img src={candbLogo} alt="logo"/>
          </a>
        </div>
      </div>
    </section>

  </Section>
)

export default Registry
