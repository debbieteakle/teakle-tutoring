import React from "react"
import { Helmet } from "react-helmet"
import "../components/global.css"
import Layout from "../components/layout.js"
import { withPrefix } from "gatsby"


const Countdown = () => {
	return (		
		   	<Layout>
		   	  	<Helmet>
			          <meta charSet="utf-8" />
			          <title>HSC Countdown to the 2020 Exams</title>
			          <link rel="canonical" href="https://teakle.com.au/hsc-countdown" />
			          <meta name="description" content="Mathew Teakle is a qualified English teacher with 20 years of tutoring experience. 
			          He provides private English tuition online to students all over NSW. Pay week by week or by term. Contact Mathew to discuss your English tutoring needs." />
					<script src={withPrefix('countdownScript.js')} type="text/javascript" />
				</Helmet>
			  	<section className="h-screen bg-gray-300 pt-8 mx-auto align-middle text-center">
					<h1 className="text-4xl">HSC Exam Countdown, 2020</h1>
						<div className="container mt-12 mx-auto">						  
						    <p className="my-5"><span className="font-bold bg-blue-400 text-6xl p-10 rounded-lg" id="daysLeft"></span></p>	
						    <p className="uppercase tracking-widest font-bold text-2xl">Days Left</p>
						    <p>Day 1 of the HSC is Tuesday 20 October 2020</p>
						    <p className="pt-10 text-2xl">You got this!</p>
						</div>			
				</section>


		  	</Layout>	
		);
}
export default Countdown






