import React from "react"
import { FaLaptop } from 'react-icons/fa';
import { FaCreditCard } from 'react-icons/fa';
import { FaCalendarTimes} from 'react-icons/fa';
import { FaUserFriends} from 'react-icons/fa';
import { FaClock} from 'react-icons/fa';
import { FaUserGraduate } from 'react-icons/fa';


const FAQs = () => {
	return (
		<section className="faq-section">
			<h2>FAQs</h2>
			<div className="faq-list">
				<article className="faq">
					<h3>How do I pay?</h3>
					<div className="faq-icon"><FaCreditCard /></div>
					<p>I'll send you an invoice via email. Invoices be paid safely and securely online via credit card or via direct debit transfer.</p>
				</article>
				<article className="faq">
					<h3>What do I need for online tutoring?</h3>
					<div className="faq-icon"><FaLaptop /></div>
					<p>A Skype account (See ‘What do I need to start using Skype‘) and a microphone and webcam (most laptops have them already)</p>
				</article>
				<article className="faq">
					<div className="faq-icon"><FaCalendarTimes /></div>
					<h3>What if I can't attend my lesson?</h3>
					<p>No problem, let me know you can't make our regular time and we'll reschedule.</p>
				</article>
				<article className="faq">
					<div className="faq-icon"><FaUserFriends /></div>
					<h3>Do you tutor in person?</h3>
					<p>Yes! My home office is a short walk from Berowra Train Station. It has all the essentials i.e. air conditioning and WiFi.</p>
				</article>
				<article className="faq">
					<div className="faq-icon"><FaClock /></div>
					<h3>Do I pay week by week or by school term?</h3>
					<p>Both! I have a casual rate and a discounted rate if you pay for the whole term (10 lessons). Get in touch to learn more.</p>
				</article>
				<article className="faq">
					<div className="faq-icon"><FaUserGraduate /></div>
					<h3>Are you a qualified teacher?</h3>
					<p>Yes! I have a Bachelor of Arts/Bachelor of Education from the University of New South Wales.</p>
				</article>
			</div>
		</section>
		);
}

export default FAQs;