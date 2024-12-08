import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../components/style/about.css";
import img1 from "../assets/images/ill1.png";
import img2 from "../assets/images/ill2.png";
import img3 from "../assets/images/ill3.png";
import img4 from "../assets/images/ill4.png";
import img5 from "../assets/images/ill5.png";
import img6 from "../assets/images/aboutimg.jpeg";
import Footer from "../components/Footer.jsx";

function About() {
	const containerRef = useRef(null);
	// De afmetingen en positie van het container-element op te slaan.
	const [containerBounds, setContainerBounds] = useState(null);

	useEffect(() => {
		// Controleert of het `containerRef` correct is gekoppeld aan een DOM-element.
		if (containerRef.current) {
			// Bereken de afmetingen van de container
			const bounds = containerRef.current.getBoundingClientRect();
			// Sla de afmetingen en positie op in de `containerBounds` state.
			setContainerBounds(bounds);
		}
	}, []);

	const getDragConstraints = (width, height, initialLeft, initialTop) => {
		// Controleert of `containerBounds` beschikbaar is. Zo niet, geef standaardwaarden terug.
		if (!containerBounds) return { top: 0, left: 0, right: 0, bottom: 0 };

		// Berekent de grenzen waarbinnen een element kan worden gesleept.
		return {
			top: -initialTop,
			left: -initialLeft,
			right: containerBounds.width - width - initialLeft,
			bottom: containerBounds.height - height - initialTop,
		};
	};

	// Array met afbeeldingen en hun startposities
	const images = [
		{ src: img1, left: 1225, top: 555 },
		{ src: img2, left: 915, top: 380 },
		{ src: img3, left: 625, top: -20 },
		{ src: img4, left: 350, top: 425 },
		{ src: img5, left: 125, top: 370 },
	];

	return (
		<>
			<div
				// Parent container van de hele pagina
				className="container"
				ref={containerRef} // Verwijzing naar het DOM-element om de afmetingen te berekenen
				style={{
					position: "relative",
					overflow: "hidden",
					height: "100vh",
					width: "100vw",
				}}
			>
				{/* Herotext bovenaan de pagina */}
				<div className="hero-text">
					<p>
						I am a Multimedia and Creative Technology student at the Erasmus
						University College Brussels, with a passion for art and the
						interaction between technology and art. My interests lie in
						different disciplines, such as graphic design, audiovisual media,
						illustration and street art. I am constantly looking for ways to
						translate ideas visually and technically, continuing to
						experimenting and further developing my skills, both in personal and
						professional contexts.
					</p>
				</div>
				{/* Extra informatie sectie */}
				<div className="information">
					<div className="info-1">
						<hr />
						<p style={{ marginTop: "0" }}>
							In addition to my studies, I am studying Interactive Media in the
							part-time art education, where I work on installations, conceptual
							art and video art. I draw inspiration from film, photography,
							audio and graphic design, and regularly visit museums, concerts
							and film screenings.
						</p>
					</div>
					<div className="info-2">
						<hr />
						<p style={{ marginTop: "0" }}>
							My background as a viola player has instilled in me perseverance
							and dedication, which I also apply in my professional work.
							Through my education, I have developed valuable skills developed,
							such as teamwork, project management, problem-solving thinking and
							professional communication.
						</p>
					</div>
				</div>
				{/* Dit deeltje van de code behandelt het plaatsen en kunnen bewegen van de afbeeldingen */}
				{containerBounds &&
					images.map((image, index) => (
						<motion.div
							key={index} //pk
							drag // Zorgt ervoor dat het element sleepbaar is
							dragConstraints={getDragConstraints(
								200,
								200,
								image.left, //startpositie links
								image.top //startpositie rechts
							)}
							style={{
								position: "absolute",
								cursor: "grab",
								top: `${image.top}px`,
								left: `${image.left}px`,
								zIndex: 999,
							}}
						>
							<div className="element e1 artwork">
								<img
									src={image.src}
									alt={`Artwork ${index + 1}`}
									className={`image-${index + 1}`}
									onDragStart={(e) => e.preventDefault()} // Voorkomt standaard slepen
								/>
							</div>
						</motion.div>
					))}
			</div>
			<div className="mobile-aboutPage-container">
				<div className="mobile-aboutPage-hero-title">
					<p>About</p>
					<hr />
				</div>
				<div className="mobile-aboutPage-hero-img">
					<img src={img6} alt="" />
					<hr />
				</div>
				<div className="mobile-aboutPage-Text">
					<p>
						I am a Multimedia and Creative Technology student at the Erasmus
						University College Brussels, with a passion for art and the
						interaction between technology and art. My interests lie in
						different disciplines, such as graphic design, audiovisual media,
						illustration and street art. I am constantly looking for ways to
						translate ideas visually and technically, continuing to
						experimenting and further developing my skills, both in personal and
						professional contexts.
					</p>
					<hr />
				</div>
				<div className="mobile-aboutPage-title">
					<p>Creative Explorations</p>
					<hr />
				</div>
				<div className="mobile-aboutPage-Text">
					<p>
						In addition to my studies, I am studying Interactive Media in the
						part-time art education, where I work on installations, conceptual
						art and video art. I draw inspiration from film, photography, audio
						and graphic design, and regularly visit museums, concerts and film
						screenings.
					</p>
					<hr />
				</div>
				<div className="mobile-aboutPage-title">
					<p>Dedication</p>
					<hr />
				</div>
				<div className="mobile-aboutPage-Text">
					<p>
						My background as a viola player has instilled in me perseverance and
						dedication, which I also apply in my professional work. Through my
						education, I have developed valuable skills developed, such as
						teamwork, project management, problem-solving thinking and
						professional communication.
					</p>
					<hr />
				</div>
				<p>Contact: </p>
				<ul
					className="footer-links-home"
					style={{
						margin: 0, // Verwijdert standaard marges
					}}
				>
					<li>
						<a
							href="https://www.instagram.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							Instagram,
						</a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							LinkedIn,
						</a>
					</li>
					<li>
						<a href="mailto:example@example.com">Email</a>
					</li>
				</ul>
			</div>
			{/* plaatsen footer component */}
			<Footer></Footer>
		</>
	);
}

export default About;
