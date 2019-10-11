import React from "react"
import { Helmet } from "react-helmet"
import "../components/global.css"
import Layout from "../components/layout.js"


const WorkPage = () => {
	return (		
		   	<Layout >
		   	  	<Helmet>
		          <meta charSet="utf-8" />
		          <title>How I Work</title>
		          <link rel="canonical" href="https://teakle.com.au/how-i-work" />
		          <meta name="description" content="Mathew Teakle is a qualified English teacher with 20 years of tutoring experience. 
		          He provides private English tuition online to students all over NSW. Pay week by week or by term. Contact Mathew to discuss your English tutoring needs." />
				</Helmet>
			  	<section className="work">
					<h2>How I Work</h2>
						<article>
							<h3>Initial consultation</h3>
							<p>When you email me via my contact form, I'll give you a call so we can discuss your needs.</p>
						</article>
						<article>
							<h3>How I Teach</h3>
							<p>I tutor responsively, so there's no set curriculum (that's for school).</p>

							<p>I'll teach you the crucial difference between answering an essay question and addressing an essay question. 
							I'll teach you creative writing. I'll teach you techniques like Anaphora, Epistrophe, Polysyndeton and Asyndeton. 
							I'll even teach you what Anadiplosis is  - so that when you write, you write well. 
							I'll get you beyond retelling and into close analysis of texts. It's fun, it's crazy, it's amazing and it's cool. 
							Imagine that - no more teachers writing 'retell' in the margins of your essays...</p>
						</article>
						<article>
							<h3>Apps I Use</h3>
							<p>Google Docs, Skype for video calls and messaging, Gmail and WaveApps for invoicing.</p>
						</article>
						<article>
							<h3>Where I Work</h3>
							<p>I work from my home office in Berowra, in the Northern Suburbs of Sydney.</p>
						</article>
						<article>
							<h3>When I Work</h3>
							<p>Monday - Friday and Sunday.</p>
						</article>
				</section>

		  	</Layout>	
		);
}
export default WorkPage






