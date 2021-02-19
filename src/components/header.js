import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import Button from "./button.js"

// .header-background {
// 	display: flex;
// 	flex-wrap: wrap;
// }

// .header-title, .header-profile {
// 	min-width: 300px;
// 	margin: 20px auto 0px;
// 	text-align: center;
// }


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
  			profile: file(relativePath: {eq: "TeakleTutoringLogo-square-600.jpg"}) {
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
				<BackgroundImage className="flex flex-wrap" fluid={data.background.childImageSharp.fluid}>
				    
					<div className="header-profile text-center mt-5 mx-auto mb-0">
					 	<Img className="profile" fluid={data.profile.childImageSharp.fluid} />
					</div>
					<div className="header-title text-center mt-5 mx-auto mb-0">	
					    <h1 className="text-4xl">Mathew Teakle</h1>
					    <h2 className="text-2xl">Sydney HSC English Tutor</h2>
						<p className="text-lg p-6">Available Sunday - Friday  |  Online or In Person</p>
						<Link to="/contact">
					        <Button name="Enquire Now"/>
					    </Link>
					</div>
			    </BackgroundImage>
		    </header>

	);
}

export default Header;