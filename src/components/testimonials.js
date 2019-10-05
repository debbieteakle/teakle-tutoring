import React from "react"
import Testimonial from "./testimonial.js"

const Testimonials = () => {
	return (
		<div className="testimonials-section">
			<h2>Student Testimonials</h2>
			<section className="testimonials-list">
				<Testimonial />
				<Testimonial />
				<Testimonial />
				<Testimonial />
				<Testimonial />
			</section>
		</div>
		);
}

export default Testimonials;