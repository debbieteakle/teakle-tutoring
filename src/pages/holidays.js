import React from "react"
import { Helmet } from "react-helmet"
import "../components/global.css"
import Layout from "../components/layout.js"
import HolidayOfferContactForm from "../components/holiday-offer-contact-form.js"

const HolidaysPage = () => (
  	<Layout>
  		<Helmet>
		          <meta charSet="utf-8" />
		          <title>Holiday Offer</title>
		          <link rel="canonical" href="https://teakle.com.au/holidays" />
		          <meta name="description" content="Make the most of the school holidays.
		           Mathew Teakle is offering a 40% discount on private English tutoring over the Christmas holidays." />
		</Helmet>
		<section className="form-header-section">
					<div className="form-header-container">
						<h1><span class="highlighted-text">Holiday Offer</span> 40% off Private English Tutoring</h1>
						<p><span class="highlighted-text">Make the most of the school holidays.</span>  Mathew Teakle is offering a 40% discount on private English tutoring over the Christmas holidays.
							<ul>
								<li>HSC specialist (Extension, Advanced and Standard)</li>
								<li>Essay writing mastery</li>
								<li>Exam preparation</li>
								<li>Analyse a text instead of 'retelling' from the Common Module through to Module&nbsp;C</li>
								<li>Easy 3 min walk from Berowra station</li>
								<li>60min sessions in air-conditioned comfort</li>
							</ul>
						</p>
					</div>
		</section>
		<HolidayOfferContactForm />
	</Layout>
)
export default HolidaysPage;