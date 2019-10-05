import React from "react"
import "./layout.css"
import Nav from "./nav.js"
import Header from "./header.js"
import Testimonials from "./testimonials.js"
import About from "./about.js"
import Contact from "./contact.js"
import Footer from "./footer.js"





const Layout = () => (
  <div className = "container">

    <Nav />
    
    <Header />

   	<Testimonials />
   
   	<About />

   	<Contact />
    
   	<Footer />

  </div>
)
export default Layout;




