import React from "react"
import { Link } from "gatsby"
const ListLink = props => (
  <li className="inline-block mr-4">
    <Link className="text-white" to={props.to}>{props.children}</Link>
  </li>
)

const Nav = () => {
	return (
			<nav className="h-12 bg-gray-800 p-4 text-center">
			    <ul>
				    <ListLink to="/">Home</ListLink>
				    <ListLink to="/how-i-work/">How I Work</ListLink>
				    <ListLink to="/testimonials/">Student Testimonials</ListLink>
				    <ListLink to="/blog/">Blog</ListLink>				    
				    <ListLink to="/contact/">Contact</ListLink>
			    </ul>
		    </nav>   	
	);
}

export default Nav;