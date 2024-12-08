import "./style/Footer.css";
function Footer() {
	return (
		// Container voor de footer
		<footer className="footer-comp">
			{/* inline css zodat het zeker rekening houdt met de styling */}
			<p style={{ textAlign: "left", marginBottom: "0" }}>Contact:</p>
			{/* Container voor de links van de footer */}
			<ul class="footer-comp-links">
				<li>
					<a href="https://www.instagram.com" target="_blank">
						Instagram,
					</a>
				</li>
				<li>
					<a href="https://www.vimeo.com" target="_blank">
						Vimeo,
					</a>
				</li>
				<li>
					<a href="https://www.linkedin.com" target="_blank">
						LinkedIn,
					</a>
				</li>
				<li>
					<a href="mailto:Tuur.van.bergen@student.ehb.be">Email</a>
				</li>
			</ul>
		</footer>
	);
}

export default Footer;
