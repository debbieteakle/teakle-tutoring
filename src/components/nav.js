import React from "react"
import { Link } from "gatsby"
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Nav = () => {
	return (
			<nav>
			    <ul>
				    <ListLink to="/">Home</ListLink>
				    <ListLink to="/how-i-work/">How I Work</ListLink>
				    <ListLink to="/contact/">Contact</ListLink>
			    </ul>
		    </nav>   	
	);
}

export default Nav;