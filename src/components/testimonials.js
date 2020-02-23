import React from "react"
import { FaQuoteRight } from 'react-icons/fa';

const Testimonials = () => {
	return (
		<section className="testimonials-section">
			<h2>HSC Student Testimonials</h2>
			<div className="testimonials-list">
				<article className="testimonial">
					<span className="testimonial-icon"><FaQuoteRight /></span>
					<div className="testimonial-description">Learning English from you has both boosted my confidence and my understanding of English. 
					Before, I was unsure of what I was doing or how to make sense of the new English syllabus, but after I learnt from you, I had a whole different perspective on
					 how to attack texts and create more cohesive essays. You later gave me tools to analyse not only text for exams, but how these can be applied to the real world 
					 and the implications it has. And for that I am very thankful.</div>
					<p className="testimonial-author">Venkat</p>
					<p className="testimonial-author-details">St Francis Xavier’s College, Hamilton, HSC 2019</p>
				</article>
				<article className="testimonial">
					<span className="testimonial-icon"><FaQuoteRight /></span>
					<div className="testimonial-description">Mat was my tutor for years 11 and 12 and it was one of the best decisions I made. He helped improve my English skills so much. 
					His wealth of knowledge made me really appreciate the nature of this subject. 
					I ended up with a Band 5 overall and English was my top mark which I couldn’t be happier about. I definitely recommend Mat to anyone who needs an extra boost with their English!</div>
					<p className="testimonial-author">Stella</p>
					<p className="testimonial-author-details">Tamworth, HSC 2019</p>
				</article>
				<article className="testimonial">
					<span className="testimonial-icon"><FaQuoteRight /></span>
					<div className="testimonial-description">… thank you for your help with English. I really appreciate the effort you put in and I’ll be sure to recommend you to other students if that’s okay with you!</div>
					<p className="testimonial-author">Annie</p>
					<p className="testimonial-author-details">Tara Anglican School for Girls, HSC 2018</p>
				</article>
				<article className="testimonial">
					<span className="testimonial-icon"><FaQuoteRight /></span>
					<div className="testimonial-description">Hi Mat! First of all I'd like to thank myself for choosing you as my English tutor for three years. My decision was an excellent one and without it, 
					I would have chosen a lesser tutor. I'd also like to thank my parents for having me in the first place so I could grow up to choose a great tutor and get a band 6 for English Advanced.
					I'm now studying Economics and my confidence in writing and speaking is indeed a valuable asset! 
					Oh and I should also say thanks to Mat! </div>
					<p className="testimonial-author">Kevin</p>
					<p className="testimonial-author-details">Sydney, HSC 2017</p>
				</article>
				<article className="testimonial">
					<span className="testimonial-icon"><FaQuoteRight /></span>
					<div className="testimonial-description">Joining online tutoring with Mat in my final year of school was one of the best decisions I made in Year 12. 
					Originally, I was a little apprehensive joining online tutoring through Skype, however the flexibility and comfort of tutoring in your own home (especially in my pyjamas) proved to be 
					more beneficial than any other tutorials I had and thanks to him, I scored myself a Band 5 in English Advanced. Mat’s passion and love for English is contagious and my attitude towards literature 
					completely changed because of him. Definitely recommend!</div>
					<p className="testimonial-author">Bec</p>
					<p className="testimonial-author-details">Riverside Girls High, HSC 2017</p>
				</article>
				<article className="testimonial">
					<span className="testimonial-icon"><FaQuoteRight /></span>
					<div className="testimonial-description">Hi Mat, it’s Abhi. I just wanted to let you know that I got a 92 for English! I also got a 98.55 atar, which I’m so over the moon about. 
					Anyway, thank you so much for all the help, advice and guidance that you’ve given me over the last few months. As well as all the essays you’ve marked, emails and discussions! 
					I couldn’t have done it without all of those things.</div>
					<p className="testimonial-author">Abhi</p>
					<p className="testimonial-author-details">HSC 2014</p>
				</article>
				<article className="testimonial">
					<span className="testimonial-icon"><FaQuoteRight /></span>
					<div className="testimonial-description">Mathew is an absolutely amazing tutor who allowed me to reach my full potential in English and pulled me from the pit of band 3 into the luxurious band 5 category.</div>
					<p className="testimonial-author">Mohamad</p>
					<p className="testimonial-author-details">Georges River Grammar, HSC 2014</p>
				</article>
				<article className="testimonial">
					<span className="testimonial-icon"><FaQuoteRight /></span>
					<div className="testimonial-description">Mat was a phenomenal tutor who helped me during my HSC in 2011. He has a wealth of knowledge and genuinely cares about the students he teaches. 
					The passion, energy, and insights he brought to each lesson has shaped the way I write and think about English as a subject and language. Even whilst studying engineering at university, 
					I have found that his lessons have continued to benefit me throughout the years. I would highly recommend him to any student who wishes to write well for the HSC and beyond.
					(1st place for English Extension 2 and 3rd place for English Extension 1, Georges River Grammar HSC 2011)</div>
					<p className="testimonial-author">Nishesh</p>
					<p className="testimonial-author-details">Georges River Grammar, HSC 2011</p>
				</article>
			</div>
		</section>
		);
}

export default Testimonials;