import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import Button from "./button.js"


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
			<header className="bg-gray-800	text-white">
				<BackgroundImage className="header-background" fluid={data.background.childImageSharp.fluid}>
				    <div className="header-title">	
					    <h1 className="text-4xl">Mathew Teakle</h1>
					    <h2 className="text-2xl">Sydney HSC English Tutor</h2>
						<h4 className="text-lg">Available Sunday - Friday  |  Online or In Person</h4>
						<Link to="/contact">
					        <Button name="Enquire Now"/>
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