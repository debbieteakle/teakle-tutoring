import React from "react"
import Nav from "./nav.js"
import Footer from "./footer.js"

export default ({ children }) => (
  <div className="pb-16">
    <Nav />
    {children}
    <Footer />
  </div>
)