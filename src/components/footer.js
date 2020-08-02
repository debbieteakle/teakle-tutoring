import React from "react"

const Footer = () => {
	return (
		<footer className="bg-gray-800 global-footer text-gray-500 text-center">
			<p>&copy; {new Date().getFullYear()} Website by <a href="https://au.linkedin.com/in/debbieteakle">Debbie Teakle</a></p>  
		</footer>
		);
}

export default Footer;