import React from "react"

import Layout from "../components/layout"

import Intro from "../sections/intro"
import CeremonyReception from "../sections/cermony-reception"
import Registry from "../sections/registry"
import Rsvp from "../sections/rsvp"

const IndexPage = (props) => (
  <Layout>
    <Intro />
    <CeremonyReception />
    <Registry />
    <Rsvp />
  </Layout>
)

export default IndexPage
