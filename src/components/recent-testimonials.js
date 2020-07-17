import React from "react"
import { FaQuoteRight } from 'react-icons/fa';
import { Link } from "gatsby"

const RecentTestimonials = () => {
	return (
		<section className="pt-4">
			<h2 className="text-center text-2xl">HSC Student Testimonials</h2>
			<div className="flex flex-wrap justify-center">
				<article className="testimonial p-8">
					<span className="testimonial-icon"><FaQuoteRight /></span>
					<div className="testimonial-description">Learning English from you has both boosted my confidence and my understanding of English. 
					Before, I was unsure of what I was doing or how to make sense of the new English syllabus, but after I learnt from you, I had a whole different perspective on
					 how to attack texts and create more cohesive essays. You later gave me tools to analyse not only text for exams, but how these can be applied to the real world 
					 and the implications it has. And for that I am very thankful.</div>
					<p className="testimonial-author">Venkat</p>
					<p className="testimonial-author-details">St Francis Xavier’s College, Hamilton, HSC 2019</p>
				</article>
				<article className="testimonial p-8">
					<span className="testimonial-icon"><FaQuoteRight /></span>
					<div className="testimonial-description">Mat was my tutor for years 11 and 12 and it was one of the best decisions I made. He helped improve my English skills so much. 
					His wealth of knowledge made me really appreciate the nature of this subject. 
					I ended up with a Band 5 overall and English was my top mark which I couldn’t be happier about. I definitely recommend Mat to anyone who needs an extra boost with their English!</div>
					<p className="testimonial-author">Stella</p>
					<p className="testimonial-author-details">Tamworth, HSC 2019</p>
				</article>
				<article className="testimonial p-8">
					<span className="testimonial-icon"><FaQuoteRight /></span>
					<div className="testimonial-description">… thank you for your help with English. I really appreciate the effort you put in and I’ll be sure to recommend you to other students if that’s okay with you!</div>
					<p className="testimonial-author">Annie</p>
					<p className="testimonial-author-details">Tara Anglican School for Girls, HSC 2018</p>
				</article>
				<article className="testimonial p-8">
					<span className="testimonial-icon"><FaQuoteRight /></span>
					<div className="testimonial-description">Hi Mat! First of all I'd like to thank myself for choosing you as my English tutor for three years. My decision was an excellent one and without it, 
					I would have chosen a lesser tutor. I'd also like to thank my parents for having me in the first place so I could grow up to choose a great tutor and get a band 6 for English Advanced.
					I'm now studying Economics and my confidence in writing and speaking is indeed a valuable asset! 
					Oh and I should also say thanks to Mat!</div>
					<p className="testimonial-author">Kevin</p>
					<p className="testimonial-author-details">Sydney, HSC 2017</p>
				</article>
			</div>
			<div className="call-to-action">
				<Link to="/testimonials">
					 <button className="button">Read All Testimonials</button>
				</Link>
			</div>
		</section>
		);
}

export default RecentTestimonials;