import React from "react"
import { Helmet } from "react-helmet"
import "../components/global.css"
import Layout from "../components/layout.js"
import Testimonials from "../components/testimonials.js"


const TestimonialsPage = () => {
	return (		
		   	<Layout >
		   	  	<Helmet>
		          <meta charSet="utf-8" />
		          <title>HSC English Success Stories | Read Student Testimonials</title>
		          <link rel="canonical" href="https://teakle.com.au/testimonials" />
		          <meta name="description" content="Read what HSC English students have to say about Mathew's High School English tuition after getting their HSC results." />
				</Helmet>
				<main className="flex-grow pt-8 sm:mx-20 mx-5 content-center" role="main">
				  	<section className="testimonials">
						<Testimonials />
					</section>
				</main>
		  	</Layout>	
		);
}
export default TestimonialsPage






