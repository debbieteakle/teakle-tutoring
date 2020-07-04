import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const ContactForm = () => {

	const profilepic = useStaticQuery(graphql`
		query ContactImages {
  			profile: file(relativePath: {eq: "mat-teakle-sydney-english-tutor.png"}) {
			    id
    			childImageSharp {
      				fluid(maxWidth: 100, quality: 100) {
        				...GatsbyImageSharpFluid
      				}
    			}
  			},
		}
		`)

	return (
		<section className="contact-form-section">

			<div className="contact-form">
			<h1>Contact Mathew about English Tuition</h1>
    		<Img className="contact-profile" fluid={profilepic.profile.childImageSharp.fluid} />
    		<h3>Want to learn more? Mat would love to hear from you. Provide some student details and he'll be in touch to discuss your goals.</h3>
			<form action="https://service.capsulecrm.com/service/newlead" method="post">
				<p>
					<input name="FORM_ID" type="hidden" value="5254ff48-69b4-453c-b271-e418bf866376" /> 
					<input name="COMPLETE_URL" type="hidden" value="https://teakle.com.au" /> 
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
					<input id="comment-field" type="text" name="COMMENT" />
					<input name="CUSTOMFIELD[Status]" type="hidden" value="pending" /> 
					<input name="CUSTOMFIELD[Lead Source]" type="hidden" value="website" /> 
					<input className="button" type="submit" value="Submit" />
				</p>
			</form>		
		</div>
		</section>
		);
}

export default ContactForm;