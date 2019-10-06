import React from "react"
import { FaQuoteRight } from 'react-icons/fa';

const Testimonials = () => {
	return (
		<section className="testimonials-section">
			<h2>Student Testimonials</h2>
			<div className="testimonials-list">
				<article className="testimonial">
				<span className="testimonial-icon"><FaQuoteRight /></span>
				<div className="testimonial-description">… thank you for your help with English.  I really appreciate the effort you put in and I’ll be sure to recommend you to other students if that’s okay with you!</div>
				<p className="testimonial-author">Annie</p>
				<p className="testimonial-author-details">Tara Anglican School for Girls, HSC 2018</p>
			</article>
			<article className="testimonial">
				<span className="testimonial-icon"><FaQuoteRight /></span>
				<div className="testimonial-description">Hi Mat, it’s Abhi. I just wanted to let you know that I got a 92 for English! I also got a 98.55 atar, which I’m so over the moon about. Anyway, thank you so much for all the help, advice and guidance that you’ve given me over the last few months. As well as all the essays you’ve marked, emails and discussions! I couldn’t have done it without all of those things.</div>
				<p className="testimonial-author">Abhi</p>
				<p className="testimonial-author-details">HSC 2014</p>
			</article>
			<article className="testimonial">
				<span className="testimonial-icon"><FaQuoteRight /></span>
				<div className="testimonial-description">Joining online tutoring with Mat in my final year of school was one of the best decisions I made in Year 12. Originally, I was a little apprehensive joining online tutoring through Skype, however the flexibility and comfort of tutoring in your own home (especially in my pyjamas) proved to be more beneficial than any other tutorials I had and thanks to him, I scored myself a Band 5 in English Advanced. Mat’s passion and love for English is contagious and my attitude towards literature completely changed because of him. Definitely recommend!</div>
				<p className="testimonial-author">Bec</p>
				<p className="testimonial-author-details">Riverside Girls High, HSC 2017</p>
			</article>
			<article className="testimonial">
				<span className="testimonial-icon"><FaQuoteRight /></span>
				<div className="testimonial-description">Mathew is an absolutely amazing tutor who allowed me to reach my full potential in English and pulled me from the pit of band 3 into the luxurious band 5 category.</div>
				<p className="testimonial-author">Mohamad</p>
				<p className="testimonial-author-details">Georges River Grammar, HSC 2014</p>
			</article>
			<article className="testimonial">
				<span className="testimonial-icon"><FaQuoteRight /></span>
				<div className="testimonial-description">Mat was a phenomenal tutor who helped me during my HSC in 2011. He has a wealth of knowledge and genuinely cares about the students he teaches. The passion, energy, and insights he brought to each lesson has shaped the way I write and think about English as a subject and language. Even whilst studying engineering at university, I have found that his lessons have continued to benefit me throughout the years. I would highly recommend him to any student who wishes to write well for the HSC and beyond.
				(1st place for English Extension 2 and 3rd place for English Extension 1, Georges River Grammar HSC 2011)</div>
				<p className="testimonial-author">Nishesh</p>
				<p className="testimonial-author-details">Georges River Grammar, HSC 2011</p>
			</article>

			</div>
		</section>
		);
}

export default Testimonials;