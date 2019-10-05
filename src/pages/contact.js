import React from "react"
import "../components/layout.css"
import Nav from "../components/nav.js"
import Footer from "../components/footer.js"


const ContactPage = () => (
  <div className = "container">

    <Nav />
    
    <div className="contact-form">
			<form action="https://service.capsulecrm.com/service/newlead" method="post">
				<p>
					<input name="FORM_ID" type="hidden" value="e2106720-ab28-4d02-bf68-5ac6bd5b0a9e" /> 
					<input name="COMPLETE_URL" type="hidden" value="http://teakle.com.au" /> 
					<input name="REVIEW_ID" type="hidden" value="217933" />
				</p>
				<p>
					<label htmlFor="FIRST_NAME">Student&apos;s First name: <input name="FIRST_NAME" type="text" placeholder="Student's First name" /></label> 
				</p>
				<p>
					<label htmlFor="LAST_NAME">Student&apos;s Last name: <input name="LAST_NAME" type="text" placeholder="Student's Last name" /></label> 
					
				</p>
				<div></div>
				<p>
					<label htmlFor="CUSTOMFIELD[School]">Student&apos;s School: <input name="CUSTOMFIELD[School]" type="text" placeholder="Student's School" /></label> 
					
				</p>
				<p>
					<label htmlFor="CUSTOMFIELD[School Year]">Student&apos;s Current School Year: <input name="CUSTOMFIELD[School Year]" type="text" placeholder="Student's Current School Year" /></label> 
					
				</p>
				<p>
					<label htmlFor="CUSTOMFIELD[Parent Name]">Parent/Guardian Name: <input name="CUSTOMFIELD[Parent Name]" type="text" placeholder="Parent/Guardian Name" /></label> 
					
				</p>
				<p>
					<label htmlFor="EMAIL">Your Email: <input name="EMAIL" type="email" placeholder="Email Address" /></label> 
				</p>
				<p>
					<label htmlFor="PHONE[HOME]">Your Phone Number: <input name="PHONE[HOME]" type="text" placeholder="Your Phone number" /></label> 
					
				</p>
				<p>
					<label htmlFor="NOTE">Your Message: <textarea  name="NOTE" placeholder="Your message"></textarea></label> 
					
				</p>
				<p>
					<input name="CUSTOMFIELD[Status]" type="hidden" value="pending" /> 
					<input name="CUSTOMFIELD[Lead Source]" type="hidden" value="website" /> 
					<input type="submit" value="Submit" />
				</p>
			</form>
	</div>
    
   	<Footer />

  </div>
)
export default ContactPage;