import React from "react"
import "../components/global.css"
import Layout from "../components/layout.js"


const WorkPage = () => {
	return (		
		   	<Layout >
			  	<div className="work">
					<h1>How I Work</h1>

					<p>Most of the tutoring I do is online via Skype however I have an office in Berowra a short walk from the train station, for those who'd prefer to have lessons in person.</p>

					<h3>What do I need?</h3>
					<ul>
						<li>a Skype account (See ‘What do I need to start using Skype‘)</li>
						<li>a microphone and webcam (most laptops have them already)</li>
					</ul>
					

					<h3>Before your first lesson</h3>
					<ul>
						<li>invite Mathew to be a Skype Contact by clicking this link.</li>
						<li>sign into your Google Docs account and let Mathew know the email address.</li>
					</ul>
					

					<h3>Before each lesson</h3>
					<ul>
						<li>Mat will send you an invitation to share a Google Doc file.</li>
						<li>Mat will video call you when it is time to start. </li>
					</ul>

					<h3>Online Invoicing</h3>
					<ul>
						<li>casual rates or get a discount when you pay for 10 sessions at a time</li>
						<li>you'll be invoiced via email</li>
						<li>invoices be paid safely and securely online via credit card.</li>
					</ul>
				</div>	
						  	
		  	</Layout>	
		);
}
export default WorkPage






