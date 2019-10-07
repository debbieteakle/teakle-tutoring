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
				</Helmet>
			  	<section className="work">
					<h2>How I Work</h2>
						<article>
							<h3>Initial consultation</h3>
							<p>When you email me via my contact form, I'll give you a call so we can discuss the goals of the student.</p>
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
							<p>Monday - Friday and Sunday</p>
						</article>
				</section>

		  	</Layout>	
		);
}
export default WorkPage






