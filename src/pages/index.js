import React from "react"
import { Helmet } from "react-helmet"
import "../components/global.css"
import Header from "../components/header.js"
import Enrolments from "../components/enrolments.js"
import Credentials from "../components/credentials.js"
import About from "../components/about.js"
import FAQs from "../components/faqs.js"
import SocialMediaFollow from "../components/social-media-follow.js"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import { FaQuoteLeft } from 'react-icons/fa';
import { Link } from "gatsby"
import Button from "../components/button.js"


const IndexPage = ({data}) => {
	return (		
		   	<Layout>
		   		<Helmet>
		          <meta charSet="utf-8" />
		          <title>Mathew Teakle Tutoring | Online HSC English Tuition, Sydney</title>
		          <link rel="canonical" href="https://teakle.com.au" />
		          <meta name="keywords" content="Find a Tutor, English Tutor, English Teacher, 
		          Private Tutor English, Online Teacher English, Private English Teacher, HSC English Tutor, 
		          High School English, High School Literacy Tutor, Essays, Creative Writing" />
		          <meta name="description" content="Mathew Teakle is a qualified English teacher with 20 years of tutoring experience. 
		          He provides private English tuition online to students all over NSW. Pay week by week or by term. Contact Mathew to discuss your English tutoring needs." />
		          <meta name="google-site-verification" content="pIfTVRhYnx_exObArZVnORzf_3KokccntYBpdYTqUzo" />
		        </Helmet>
		        <main className="flex-grow" role="main">
				    <Header />
				    <Enrolments />
				    <Credentials />
				    <div><h1 className="text-2xl pt-4 text-center">HSC Student Testimonials</h1></div>
			   		<div className="flex flex-wrap justify-center">

			   			{data.allMarkdownRemark.edges.map(testimonial => (
			                
			                <article className="testimonial p-8 bg-gray-200" key = {testimonial.node.id} >
			                    <FaQuoteLeft />
			                    <div dangerouslySetInnerHTML={{ __html: testimonial.node.html}} />
			                    <h2 className="text-sm italic font-bold mr-4 leading-tight"><Link to={testimonial.node.frontmatter.path}>{testimonial.node.frontmatter.author}</Link></h2>
			                    <small>{ testimonial.node.frontmatter.location }, {'  '}
			                      { testimonial.node.frontmatter.studytype }{'  '}{ testimonial.node.frontmatter.year }</small>
			                </article>
			                
              			))}

			   		</div>
			   			<div className="call-to-action">
							<Link to="/testimonials">
					 			<Button name="Read All Testimonials"/>
							</Link>
						</div>
			   		<About />
			   		<FAQs />
			   		<SocialMediaFollow />
		   		</main>
		  	</Layout>	
		);
}

export const testimonialQuery = graphql `
  query RecentTestimonialQuery {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/testimonials/"}, frontmatter: {year: {eq: "2020"}}}) {
    edges {
      node {
        frontmatter {
          studytype
          year
          author
          location
          path
        }
        id
        html
      }
    }
  }
}


`
export default IndexPage

