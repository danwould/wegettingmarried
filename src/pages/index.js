import React from "react"

import Layout from "../components/layout"
import Intro from "../components/intro"
import Ceremony from "../components/ceremony"
import Registry from "../components/registry"
import Reception from "../components/reception"
import Rsvp from "../components/rsvp"

const IndexPage = () => (
  <Layout>
    <Intro></Intro>
    <Ceremony></Ceremony>
    <Reception></Reception>
    <Registry></Registry>
    <Rsvp></Rsvp>
  </Layout>
)

export default IndexPage
