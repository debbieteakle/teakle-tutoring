import React from "react"
import "../components/global.css"
import Header from "../components/header.js"
import Enrolments from "../components/enrolments.js"
import Credentials from "../components/credentials.js"
import Testimonials from "../components/testimonials.js"
import About from "../components/about.js"
import FAQs from "../components/faqs.js"
import Layout from "../components/layout"



const IndexPage = () => {
	return (		
		   	<Layout>
			    <Header />
			    <Enrolments />
			    <Credentials />
		   		<Testimonials />
		   		<About />
		   		<FAQs />
		  	</Layout>	
		);
}
export default IndexPage

