import React from "react"
import { FaQuoteRight } from 'react-icons/fa';

const Testimonial = () => {
	return (
		<article className="testimonial">
			<span className="testimonial-icon"><FaQuoteRight /></span>
			<div className="testimonial-description">Mathew is an absolutely amazing tutor who allowed me to reach my full potential in English and pulled me from the pit of band 3 into the luxurious band 5 category.</div>
			<p className="testimonial-author">Mohamad</p>
			<p className="testimonial-author-details">Georges River Grammar, HSC 2014</p>
		</article>
		);
}

export default Testimonial;