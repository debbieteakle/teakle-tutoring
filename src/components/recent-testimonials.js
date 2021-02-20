import React from "react"
import { FaQuoteRight } from 'react-icons/fa';
import { Link } from "gatsby"
import Button from "./button.js"

const RecentTestimonials = () => {
	return (
		<section className="pt-4">
			<h2 className="text-center text-2xl">HSC 2020 Student Testimonials</h2>
			<div className="flex flex-wrap justify-center">
				<article className="testimonial p-8 bg-gray-200">
					<span className="testimonial-icon bg-gray-200"><FaQuoteRight /></span>
					<div className="testimonial-description">
						Mat was my tutor through all of Year 12 and he helped improve my marks dramatically.
						He knows the syllabuses and texts thoroughly and knows the different ways to answer
						tricky questions and please the markers! His lessons are lighthearted and easy to
						digest. Thanks, Mat, for being a great teacher!
					</div>
					<p className="italic font-bold mr-4 text-sm leading-tight">Dom D</p>
					<p className="text-sm">Hornsby, HSC 2020</p>
				</article>
				<article className="testimonial p-8 bg-gray-200">
					<span className="testimonial-icon bg-gray-200"><FaQuoteRight /></span>
					<div className="testimonial-description">
						Honestly, the best English tutor you will find. It is guaranteed Mat will help you improve your
						skills considerably in any period of time.
					</div>
					<p className="italic font-bold mr-4 text-sm leading-tight">Mebin L</p>
					<p className="text-sm">Newcastle, HSC 2020</p>
				</article>
				<article className="testimonial p-8 bg-gray-200">
					<span className="testimonial-icon bg-gray-200"><FaQuoteRight /></span>
					<div className="testimonial-description">
						Mat was my English tutor for year 12. I began tutoring just before the trial exams, and in the 
						time between the trials and the hsc I noticed a significant improvement in my ability to interpret 
						stimulus myself. Mat’s tutoring sessions are very well planned and allowed me to focus on specific 
						areas I needed to improve on. I would 100% recommend Mat as an English tutor, as he helped me a 
						lot to achieve the best I could for the hsc English exams.
					</div>
					<p className="italic font-bold mr-4 text-sm leading-tight">Benjamin R</p>
					<p className="text-sm">Sydney, HSC 2020</p>
				</article>
				<article className="testimonial p-8 bg-gray-200">
					<span className="testimonial-icon bg-gray-200"><FaQuoteRight /></span>
					<div className="testimonial-description">
						Best English tutor out there! He helped pull my grades out of the ditch and truely
						appreciate English and literature. Thanks mat for all of the help!
					</div>
					<p className="italic font-bold mr-4 text-sm leading-tight">Shelby N</p>
					<p className="text-sm">Sydney Grammar, HSC 2020</p>
				</article>
				<article className="testimonial p-8 bg-gray-200">
					<span className="testimonial-icon bg-gray-200"><FaQuoteRight /></span>
					<div className="testimonial-description">
						Mat is an incredible English tutor and has been supporting me in my learning for 5 years and 
						most of my high school period. He genuinely loves English and teaching his students, and that 
						comes across so clearly in our weekly lessons. Every lesson we had was different and exciting 
						with new content, skills or practice exercises and unseen texts. Mat helped me greatly improve 
						my essay writing which was so helpful when I studied the International Baccalaureate (IB). 
						I would especially like to acknowledge and appreciate his willingness to explore a completely 
						different course, the IB, despite his focus on HSC in his other students. Mat always ensured 
						that he knew my texts well, even with some very obscure novels, and continually challenged me 
						to develop new and fresh readings of the texts. He also supplemented my own ideas with unique 
						thoughts of his own, which never ceased to provoke interesting conversations about different 
						perspectives on the texts. I cannot recommend Mat enough, not only in his skill and expertise 
						in English, but also for his friendly and laid-back character. I strongly believe that all 
						students would greatly benefit from Mat's teaching. With Mat's incredible guidance and advice, 
						I am proud to say that I have achieved the highest grade in English Higher Level for my final 
						exams, and placed first in my cohort in the subject. Thank you so much Mat!
					</div>
					<p className="italic font-bold mr-4 text-sm leading-tight">Emily S</p>
					<p className="text-sm">International Baccalaureate, Sydney 2020</p>
				</article>
			</div>
			<div className="call-to-action">
				<Link to="/testimonials">
					 <Button name="Read All Testimonials"/>
				</Link>
			</div>
		</section>
		);
}

export default RecentTestimonials;