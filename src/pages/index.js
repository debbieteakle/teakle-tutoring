import React from "react"
import { Helmet } from "react-helmet"
import "../components/global.css"
import Header from "../components/header.js"
import Enrolments from "../components/enrolments.js"
import Credentials from "../components/credentials.js"
import RecentTestimonials from "../components/recent-testimonials.js"
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
		          <meta name="keywords" content="Find a Tutor, English Tutor, English Teacher, 
		          Private Tutor English, Online Teacher English, Private English Teacher, HSC English Tutor, 
		          High School English, High School Literacy Tutor, Essays, Creative Writing" />
		          <meta name="description" content="Mathew Teakle is a qualified English teacher with 20 years of tutoring experience. 
		          He provides private English tuition online to students all over NSW. Pay week by week or by term. Contact Mathew to discuss your English tutoring needs." />
		          <meta name="google-site-verification" content="pIfTVRhYnx_exObArZVnORzf_3KokccntYBpdYTqUzo" />
		        </Helmet>
			    <Header />
			    <Enrolments />
			    <Credentials />
		   		<RecentTestimonials />
		   		<About />
		   		<FAQs />
		  	</Layout>	
		);
}
export default IndexPage

