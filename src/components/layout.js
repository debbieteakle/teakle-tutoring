import React from "react"
import Nav from "./nav.js"
import Footer from "./footer.js"

export default ({ children }) => (
  <div className="layout">
    <Nav />
    {children}
    <Footer />
  </div>
)