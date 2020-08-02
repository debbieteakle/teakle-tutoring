import React from "react"
import Nav from "./nav.js"
import Footer from "./footer.js"

export default ({ children }) => (
  <div className="flex flex-col h-screen">
    <Nav />
    {children}
    <Footer />
  </div>
)