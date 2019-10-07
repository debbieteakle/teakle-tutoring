import React from "react"
import { Helmet } from "react-helmet"
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
		   		<Helmet>
		          <meta charSet="utf-8" />
		          <title>Mathew Teakle | English Tutor</title>
		          <link rel="canonical" href="https://teakle.com.au" />
		          <meta name="description" content="Mathew Teakle is a qualified English teacher with 20 years of tutoring experience. 
		          He provides private English tuition online to students all over NSW. Pay week by week or by term. Contact Mathew to discuss your English tutoring needs." />
		        </Helmet>
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

