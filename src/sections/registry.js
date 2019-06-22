import React from "react"
import Section from "../components/section-layout"
import honeyFundIcon from "../images/honeymoon-icon.svg"
import ribbonIcon from "../images/ribbon-icon.svg"
import giftIcon from "../images/giftbox-icon.svg"
import heathLogo from "../images/heath-logo.svg"
import candbLogo from "../images/c-and-b-logo.svg"
import venmoLogo from "../images/venmo-logo.svg"
import paypalLogo from "../images/paypal-logo.svg"

const Registry = () => (
  <Section className="section-registry gray-background">
    <h2>Registry</h2>
    <p>Here's some of the places we registered at</p>

    <div className="top-section fifty-fifty-row">
      <section className="section section-honeyfund column gray-background">
        <img src={honeyFundIcon} alt="logo" className="icon"/>
        <h3>Honeyfund</h3>
        <p>Contributions to the couple’s honeymoon fund can be made by check (payable to Mariecar Mendoza and Dan Wood)</p>
        <p>Or use the following links to contribute digitally</p>
        <div className="bottom-section">
          <div className="fifty-fifty-row logo-wrapper">
            <div className="column">
              <a href="https://paypal.me/danwoulddesign?locale.x=en_US" target="_blank" rel="noopener noreferrer">
                <img src={venmoLogo} alt="logo"/>
              </a>
            </div>
            <div className="column">
              <a href="https://paypal.me/danwoulddesign?locale.x=en_US" target="_blank" rel="noopener noreferrer">
                <img src={paypalLogo} alt="logo"/>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-mikeyfund column gray-background">
        <img src={ribbonIcon} alt="logo" className="icon"/>
        <h3>Research GIST in honor Mikey</h3>
        <p>Donations to the UC San Diego cancer research fund un memory of our beloved Michael G Wood</p>
        <p>In the memo line: Fund #2570 - SDH Research Fund.</p>
        <a href="http://bit.ly/Donate4Mikey" target="_blank" rel="noopener noreferrer" className="button">Donate</a>
      </section>
    </div>

    <section className="section bottom-section section-gifts gray-background">
      <img src={giftIcon} alt="logo" className="icon"/>
      <h3>Gifts</h3>
      <p>Presents may be purchased at the following retailers:</p>
      <div className="logo-wrapper fifty-fifty-row">
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
