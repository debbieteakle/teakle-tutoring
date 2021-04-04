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
			          <title>HSC Countdown to the 2021 Exams</title>
			          <link rel="canonical" href="https://teakle.com.au/hsc-countdown" />
			          <meta name="description" content="Keep track of how many study days you have left until the HSC. 
			          With compliments from Mathew Teakle, HSC English tutor." />
					<script src={withPrefix('countdownScript.js')} type="text/javascript" />
				</Helmet>
			  	<main className="flex-grow h-screen bg-gray-300 pt-8 mx-auto align-middle text-center" role="main">
					<h1 className="text-4xl mx-5">HSC Exam Countdown, 2021</h1>
						<div className="container mt-12 mx-auto">						  
						    <p className="my-5"><span className="font-bold bg-blue-400 text-6xl p-10 rounded-lg" id="daysLeft"></span></p>	
						    <p className="uppercase tracking-widest font-bold text-2xl">Days Left</p>
						    <p>Day 1 of the HSC written examinations is Tuesday 12 October 2021</p>
						    <p className="pt-10 text-2xl">You got this!</p>
						</div>			
				</main>


		  	</Layout>	
		);
}
export default Countdown






