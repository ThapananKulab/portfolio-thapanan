import * as React from "react"

import Navbar from "../components/header"
import Seo from "../components/seo"

const About = () => {
  return (
    <div>
      <Navbar />
      About
    </div>
  )
}

export const Head = () => <Seo title="About | Thapanan Kulab" />

export default About
