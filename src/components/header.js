import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"


const Header = () => {
	const data = useStaticQuery(graphql`
		query Images {
			background: file(relativePath: {eq: "background.jpg"}) {
			    id
			    childImageSharp {
			      fluid {
			        ...GatsbyImageSharpFluid
			      }
			    }
  			},
  			profile: file(relativePath: {eq: "mat-teakle-sydney-english-tutor.png"}) {
			    id
			    childImageSharp {
			      fluid(maxWidth: 750) {
			        ...GatsbyImageSharpFluid
			      }
			    }
  			},

		}
		`)

	return (
			<header>
				<BackgroundImage className="header-background" fluid={data.background.childImageSharp.fluid}>
				    <div className="header-title">	
					    <h1>Mathew Teakle</h1>
					    <h2>Sydney HSC English Tutor</h2>
						<h3>Available Monday-Friday
						& Sundays</h3>
						<Link to="/contact">
					        <button className="button">Contact</button>
					    </Link>
					</div>
					<div className="header-profile">
					 	<Img className="profile" fluid={data.profile.childImageSharp.fluid} />
					</div>
			    </BackgroundImage>
		    </header>

	);
}

export default Header;