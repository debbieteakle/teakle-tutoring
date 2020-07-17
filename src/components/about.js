import React from "react"


const About = () => {
	return (
		<section className="about-section bg-gray-200" id="about">
			<div className="about-subsection">
				<h2>About Mathew</h2>
				<p>B.A. B.Ed. University of New South Wales</p>
				<p>Mathew has been tutoring English since 1998 and despite it being a part time gig 
				for much of that time, demand for his services increased so much that he is now tutoring
				full-time. He has four kids and is married to Debbie who works in the tech industry. 
				(Hence this awesome website!) In his spare time Mat enjoys playing golf, going to the gym,
				reading, writing short stories – he occasionally appears in feature films, on TV or in print
				advertisements. He also enjoys editing copy written by his well-meaning wife… (how did I do?)</p>
			</div>
			<div className="about-subsection">
					<dl>
	  					<dt>
	    					Main Teaching Areas
	  					</dt>
						  <dd class="percentage percentage-95"><span class="text">Essay Writing</span></dd>
						  <dd class="percentage percentage-95"><span class="text">Creative Writing</span></dd>
						  <dd class="percentage percentage-90"><span class="text">Textual Analysis</span></dd>
						  <dd class="percentage percentage-90"><span class="text">Film</span></dd>
						  <dd class="percentage percentage-70"><span class="text">Adult Education</span></dd>
					</dl>
					
			</div>
		</section>
		);
}

export default About;