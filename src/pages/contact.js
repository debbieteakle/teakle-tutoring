import React from "react"
import { Helmet } from "react-helmet"
import "../components/global.css"
import Layout from "../components/layout.js"
import ContactForm from "../components/contact-form.js"

const ContactPage = () => (
  	<Layout>
  		<Helmet>
		          <meta charSet="utf-8" />
		          <title>Contact Mathew</title>
		          <link rel="canonical" href="https://teakle.com.au/contact" />
		        </Helmet>
		<ContactForm />
	</Layout>
)
export default ContactPage;