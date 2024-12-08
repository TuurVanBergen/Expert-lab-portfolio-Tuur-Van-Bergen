import "../components/style/work1.css";
import Footer from "../components/Footer.jsx";
import img1 from "../assets/images/AKK/img1.jpeg";
import img2 from "../assets/images/AKK/img2.png";
import img3 from "../assets/images/AKK/img3.png";
import img4 from "../assets/images/AKK/img4.png";
import img5 from "../assets/images/AKK/img5.png";
import img6 from "../assets/images/AKK/img6.png";
import img7 from "../assets/images/AKK/img7.png";
import { motion } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom"; // Voor navigatie

function Work1() {
	// Haal de huidige URL op om te bepalen op welke pagina de gebruiker zich bevindt
	const location = useLocation();
	const currentPage = parseInt(location.pathname.split("/work")[1], 10) || 1;

	// Gebruik voor navigatie tussen pagina's
	const navigate = useNavigate();

	// Functie om naar een andere pagina te navigeren en naar boven te scrollen
	const navigateToPage = (page) => {
		navigate(page); // Navigeer naar de opgegeven pagina
		window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll soepel naar boven
	};

	// Afbeeldingenlijst
	const images = [img1, img2, img3, img4, img5, img6, img7];

	// State voor het bijhouden van de huidige slide-index in de carrousel
	const [slideIndex, setSlideIndex] = useState(1);
	// State voor het beheren van de modaalweergave
	const [isModalOpen, setModalOpen] = useState(false);
	// State voor de afbeelding die in de modaal wordt weergegeven
	const [modalImage, setModalImage] = useState(null);

	// Functie om het modaal te openen
	const openModal = (image) => {
		setModalImage(image);
		setModalOpen(true);
	};

	// Functie om het modaal te sluiten
	const closeModal = () => {
		setModalOpen(false);
	};

	// Functie om naar de volgende/vorige slide te gaan
	const plusSlides = (n) => {
		let newIndex = slideIndex + n;
		const totalSlides = 7; // Aantal slides
		if (newIndex > totalSlides) newIndex = 1;
		if (newIndex < 1) newIndex = totalSlides;
		setSlideIndex(newIndex);
	};

	// Functie om een specifieke slide te selecteren
	const currentSlide = (n) => {
		setSlideIndex(n);
	};

	// Ref en state voor het bepalen van de grenzen van de container
	const containerRef = useRef(null);
	const [containerBounds, setContainerBounds] = useState(null);

	// Bereken de grenzen van de container zodra de component is gerenderd
	useEffect(() => {
		// Bereken de afmetingen van de container
		if (containerRef.current) {
			const bounds = containerRef.current.getBoundingClientRect();
			setContainerBounds(bounds);
		}
	}, []);

	// Functie om de sleepgrenzen voor elementen te bepalen
	const getDragConstraints = (
		videoWidth,
		videoHeight,
		initialLeft,
		initialTop
	) => {
		if (!containerBounds) return { top: 0, left: 0, right: 0, bottom: 0 };

		return {
			top: -initialTop,
			left: -initialLeft,
			right: containerBounds.width - videoWidth - initialLeft,
			bottom: containerBounds.height - videoHeight - initialTop,
		};
	};
	return (
		<>
			{/* Hoofdcontainer */}
			<div
				className="container"
				ref={containerRef}
				style={{
					position: "relative",
					height: "100vh",
					width: "100vw",
				}}
			>
				{/* De inhoud in de motion.div kan gesleept worden */}
				<motion.div
					drag
					dragConstraints={getDragConstraints(480, 360, 70, 150)}
					style={{
						zIndex: "999",
						cursor: "grab",
						width: "100%",
					}}
				>
					<div
						className="about-title"
						style={{ top: "55px", left: "8%", position: "absolute" }}
					>
						Antwerpen Klinkt Klassiek
					</div>
				</motion.div>
				<motion.div
					drag
					dragConstraints={getDragConstraints(480, 360, 70, 150)}
					style={{
						zIndex: "999",
						cursor: "grab",
						width: "100%",
					}}
				>
					<div
						className="about-text-1"
						style={{ top: "455px", left: "58%", position: "absolute" }}
					>
						<p>Problem: </p>
						<p>
							The problem I wanted to solve with my project is the lack of
							diversity and inclusivity in classical music. Every time I go to a
							concert, I notice that the audience and performers are mostly
							white, which doesn’t reflect the diversity of society. I wanted to
							change that. I’ve also seen that many young people dismiss
							classical music without ever listening to it, thinking it’s
							old-fashioned This motivated me to show that classical music can
							be interesting and relevant to everyone. To address this, I
							decided to organize a festival that encourages inclusivity and
							also appeals to younger audiences, with a modern, stylish website
							that still keeps the classical feel.
						</p>
					</div>
				</motion.div>
				<motion.div
					drag
					dragConstraints={getDragConstraints(480, 360, 70, 150)}
					style={{
						zIndex: "999",
						cursor: "grab",
						width: "100%",
					}}
				>
					<div
						className="about-text-2"
						style={{ top: "1955px", left: "38%", position: "absolute" }}
					>
						<p>Research:</p>
						<p>
							For this section, I researched existing classical music festivals
							and concert halls for inspiration. I looked at how they promote
							and design their programs. I also created a mood board with images
							from Pinterest and studied concert hall websites to get ideas for
							the visual style of the festival.
						</p>
					</div>
				</motion.div>
				<motion.div
					drag
					dragConstraints={getDragConstraints(480, 360, 70, 150)}
					style={{
						zIndex: "999",
						cursor: "grab",
						width: "100%",
					}}
				>
					<div
						className="about-text-3"
						style={{ top: "2955px", left: "8%", position: "absolute" }}
					>
						<p>Process: </p>
						<p>
							My creative process began with sketching, first doing a mind map
							and brainstorming session to gather ideas. I then researched
							existing festivals and concert halls to gain inspiration and
							insight. Then I created a site map to determine the structure of
							the website. Based on that, I created a wireframe and eventually
							worked it into the final design.
						</p>
					</div>
				</motion.div>
				{/* Foto's van het project */}
				<div className="wrapper">
					<div className="hero-img">
						<img src={img1} alt="" />
					</div>
					<div className="img1">
						<img src={img2} alt="" />
					</div>
					<div className="img2">
						<img src={img6} alt="" />
					</div>
					<div className="img1">
						<img src={img3} alt="" />
					</div>
					<div className="img2">
						<img src={img5} alt="" />
					</div>
					<div className="img1">
						<img src={img4} alt="" />
					</div>
					<div className="img2">
						<img src={img7} alt="" />
					</div>
				</div>
			</div>
			{/* Mobile Section */}
			<div className="mobile">
				{/* Titel en beschrijving van de mobiele weergave */}
				<div className="mobile-hero-title">
					<p>Antwerpen Klinkt Klassiek</p>
					<hr />
				</div>
				<div className="mobile-tags">
					<p>15/11/2023</p>
					<p>Graphic Design</p>
					<p>Mobile Webdesign</p>
					<hr />
				</div>
				{/* Slideshow container */}
				<div className="mobile-image-caroussel">
					<div className="slideshow-container">
						{images.map((image, index) => (
							<div
								key={index}
								className={`mySlides ${
									slideIndex === index + 1 ? "active-slide" : "" // Controleer of de huidige slide actief is
								}`}
								style={{
									display: slideIndex === index + 1 ? "block" : "none", // Alleen de actieve slide weergeven
								}}
							>
								<img
									src={image}
									alt={`Slide ${index + 1}`}
									onClick={() => openModal(image)} // Open de modaal bij een klik
									style={{ cursor: "pointer" }} // Cursor verandert in een aanwijzer bij hover
								/>
							</div>
						))}
						{/* Navigatieknoppen voor de carrousel */}
						<a className="prev" onClick={() => plusSlides(-1)}>
							&#10094;
						</a>
						<a className="next" onClick={() => plusSlides(1)}>
							&#10095;
						</a>
					</div>

					{/* Dots/circles */}
					{/* Indicatoren (dots) voor de carrousel */}
					<div style={{ textAlign: "center" }}>
						{images.map((_, index) => (
							<span
								key={index}
								className={`dot ${slideIndex === index + 1 ? "active" : ""}`} // Controleer welke dot actief is
								onClick={() => currentSlide(index + 1)}
							></span>
						))}
					</div>

					{/* Modaal */}
					{/* Modaal venster voor vergrote weergave van afbeeldingen */}
					<div className={`modal ${isModalOpen ? "active" : ""}`}>
						<img src={modalImage} alt="Large View" />{" "}
						{/* Vergrote afbeelding */}
						<button className="modal-close" onClick={closeModal}>
							&times; {/* Sluit knop */}
						</button>
					</div>
				</div>
				{/* Overzicht van het project */}
				<div className="mobile-about-title">
					<p>About: </p>
					<hr />
				</div>
				<div className="mobile-about-text-1">
					<p>
						The problem I wanted to solve with my project is the lack of
						diversity and inclusivity in classical music. Every time I go to a
						concert, I notice that the audience and performers are mostly white,
						which doesn’t reflect the diversity of society. I wanted to change
						that. I’ve also seen that many young people dismiss classical music
						without ever listening to it, thinking it’s old-fashioned This
						motivated me to show that classical music can be interesting and
						relevant to everyone. To address this, I decided to organize a
						festival that encourages inclusivity and also appeals to younger
						audiences, with a modern, stylish website that still keeps the
						classical feel.
					</p>
					<hr />
				</div>
				<div className="mobile-about-title">
					<p>Research: </p>
					<hr />
				</div>
				<div className="mobile-about-text-2">
					<p>
						For this section, I researched existing classical music festivals
						and concert halls for inspiration. I looked at how they promote and
						design their programs. I also created a mood board with images from
						Pinterest and studied concert hall websites to get ideas for the
						visual style of the festival.
					</p>
					<hr />
				</div>
				<div className="mobile-about-title">
					<p>Process: </p>
					<hr />
				</div>
				<div className="mobile-about-text-3">
					<p>
						My creative process began with sketching, first doing a mind map and
						brainstorming session to gather ideas. I then researched existing
						festivals and concert halls to gain inspiration and insight. Then I
						created a site map to determine the structure of the website. Based
						on that, I created a wireframe and eventually worked it into the
						final design.
					</p>
				</div>
				{/* Navigatieknoppen voor mobiele weergave */}
				<div className="mobile-bottom-nav">
					<div className="nav-previous">
						{currentPage > 1 ? (
							<a onClick={() => navigateToPage(`/work${currentPage - 1}`)}>
								Previous
							</a>
						) : (
							<Link
								to="/"
								onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
							>
								Back to Work
							</Link>
						)}
					</div>
					<div className="nav-next">
						{currentPage < 10 ? (
							<a onClick={() => navigateToPage(`/work${currentPage + 1}`)}>
								Next
							</a>
						) : (
							<Link
								to="/"
								onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
							>
								Back to Work
							</Link>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default Work1;
