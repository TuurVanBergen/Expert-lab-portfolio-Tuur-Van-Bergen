import "../components/style/work9.css";
import Footer from "../components/Footer.jsx";
import img1 from "../assets/images/Sprints/sprint3/img1.jpg";
import img2 from "../assets/images/Sprints/sprint3/img2.jpg";
import img3 from "../assets/images/Sprints/sprint3/img3.jpg";
import img4 from "../assets/images/Sprints/sprint3/img4.jpg";
import img5 from "../assets/images/Sprints/sprint3/img5.jpeg";
import img6 from "../assets/images/Sprints/sprint3/img6.jpg";
import img7 from "../assets/images/Sprints/sprint3/img7.jpg";
import { useLocation, Link, useNavigate } from "react-router-dom"; // Voor navigatie

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
// Lees work1.jsx voor uitleg file.
function Work9() {
	const location = useLocation();
	const currentPage = parseInt(location.pathname.split("/work")[1], 10) || 1;

	const navigate = useNavigate();

	// Functie om naar een andere pagina te navigeren en naar boven te scrollen
	const navigateToPage = (page) => {
		navigate(page); // Navigeer naar de opgegeven pagina
		window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll soepel naar boven
	};

	const [slideIndex, setSlideIndex] = useState(1);
	const [isModalOpen, setModalOpen] = useState(false);
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
		const totalSlides = 6; // Aantal slides
		if (newIndex > totalSlides) newIndex = 1;
		if (newIndex < 1) newIndex = totalSlides;
		setSlideIndex(newIndex);
	};

	// Functie om een specifieke slide te selecteren
	const currentSlide = (n) => {
		setSlideIndex(n);
	};

	const containerRef = useRef(null);
	const [containerBounds, setContainerBounds] = useState(null);

	useEffect(() => {
		// Bereken de afmetingen van de container
		if (containerRef.current) {
			const bounds = containerRef.current.getBoundingClientRect();
			setContainerBounds(bounds);
		}
	}, []);

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
			<div
				className="container"
				ref={containerRef}
				style={{
					position: "relative",
					height: "100vh",
					width: "100vw",
				}}
			>
				<motion.div
					drag
					dragConstraints={getDragConstraints(480, 360, 70, 150)}
					style={{
						zIndex: "999",
						cursor: "grab",
						width: "100%",
					}}
				>
					<div className="about-title">Installation concepts</div>
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
					<div className="about-text-1">
						<p>
							The brief revolved around designing and presenting five
							interactive installation concepts that fit within a space of 3x3
							metres. Each concept had to provide insight into the functionality
							scale, and atmosphere of the installation. This was done using
							various visual and physical methods, such as 3D visualisations and
							models, to communicate the ideas. The aim was to increase the
							interaction with the user and the emotional impact of the
							installations.
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
					<div className="about-text-2">
						<p>Light and Material Exploration:</p>
						<p>
							The first phase consisted of an extensive brainstorming session to
							generate various ideas. After an evaluation, five concepts were
							selected, each offering a unique user experience offer, ranging
							from colour psychology to interactive nature themes. For each
							concept, mood boards were created to define the atmosphere and
							style.
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
					<div className="about-text-3">
						<p>Development and Prototyping:</p>
						<p>
							For each concept, a prototype was developed with a specific
							approach: 3D visualisations, physical models and analogue
							approaches. The prototypes give a clear picture of how the
							installations function and how users interact with them. Each
							prototype included elements such as interaction suggestions,
							visual and auditory effects, and a scale model.
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
					<div className="about-text-4">
						<p>Outcome and Reflection:</p>
						<p>
							The technical aspects of the installations, such as the required
							hardware and software, were worked out in detail. Here tools such
							as TouchDesigner, Pure Data and Arduino to realise interactions
							and visual projections. Reflection on the prototypes led to
							improvements and strengthened the conceptual clarity of the
							installations.
						</p>
					</div>
				</motion.div>
				<div className="wrapper">
					<div className="hero-img">
						<img src={img1} alt="" />
					</div>
					<div className="img1">
						<img src={img2} alt="" />
					</div>
					<div className="img2">
						<img src={img5} alt="" />
					</div>
					<div className="img1">
						<img src={img6} alt="" />
					</div>
					<div className="img2">
						<img src={img4} alt="" />
					</div>
					<div className="img1">
						<img src={img3} alt="" />
					</div>
				</div>
			</div>
			{/* Mobile Section */}
			<div className="mobile">
				<div className="mobile-hero-title">
					<p>Installation concepts</p>
					<hr />
				</div>
				<div className="mobile-tags">
					<p>19/11/2024</p>
					<p>Installation</p>
					<p>Concepts</p>
					<hr />
				</div>
				{/* Slideshow container */}
				<div className="mobile-image-caroussel">
					{/* Slideshow container */}
					<div className="slideshow-container">
						{/* Render alle slides dynamisch */}
						{[img1, img2, img3, img4, img5, img6].map((image, index) => (
							<div
								key={index}
								className={`mySlides ${
									slideIndex === index + 1 ? "active-slide" : ""
								}`}
								style={{
									display: slideIndex === index + 1 ? "block" : "none",
								}}
							>
								<img
									src={image}
									alt={`Slide ${index + 1}`}
									onClick={() => openModal(image)} // Open de modaal bij klik
									style={{ cursor: "pointer" }}
								/>
							</div>
						))}

						{/* Navigatieknoppen */}
						<a className="prev" onClick={() => plusSlides(-1)}>
							&#10094;
						</a>
						<a className="next" onClick={() => plusSlides(1)}>
							&#10095;
						</a>
					</div>

					{/* Dots/circles */}

					<div style={{ textAlign: "center" }}>
						{[img1, img2, img3, img4, img5, img6].map((_, index) => (
							<span
								key={index}
								className={`dot ${slideIndex === index + 1 ? "active" : ""}`}
								onClick={() => currentSlide(index + 1)}
							></span>
						))}
					</div>

					{/* Modaal */}
					<div className={`modal ${isModalOpen ? "active" : ""}`}>
						<img src={modalImage} alt="Large View" />
						<button className="modal-close" onClick={closeModal}>
							&times; {/* Sluit knop */}
						</button>
					</div>
				</div>
				<div className="mobile-about-title">
					<p>About: </p>
					<hr />
				</div>
				<div className="mobile-about-text-1">
					<p>
						The brief revolved around designing and presenting five interactive
						installation concepts that fit within a space of 3x3 metres. Each
						concept had to provide insight into the functionality scale, and
						atmosphere of the installation. This was done using various visual
						and physical methods, such as 3D visualisations and models, to
						communicate the ideas. The aim was to increase the interaction with
						the user and the emotional impact of the installations.
					</p>
					<hr />
				</div>
				<div className="mobile-about-title">
					<p>Research: </p>
					<hr />
				</div>
				<div className="mobile-about-text-2">
					<p>
						The first phase consisted of an extensive brainstorming session to
						generate various ideas. After an evaluation, five concepts were
						selected, each offering a unique user experience offer, ranging from
						colour psychology to interactive nature themes. For each concept,
						mood boards were created to define the atmosphere and style.
					</p>
					<hr />
				</div>
				<div className="mobile-about-title">
					<p>Process: </p>
					<hr />
				</div>
				<div className="mobile-about-text-3">
					<p>
						For each concept, a prototype was developed with a specific
						approach: 3D visualisations, physical models and analogue
						approaches. The prototypes give a clear picture of how the
						installations function and how users interact with them. Each
						prototype included elements such as interaction suggestions, visual
						and auditory effects, and a scale model.
					</p>
				</div>
				<div className="mobile-about-title">
					<p>Technical aspects: </p>
					<hr />
				</div>
				<div className="mobile-about-text-3">
					<p>
						The technical aspects of the installations, such as the required
						hardware and software, were worked out in detail. Here tools such as
						TouchDesigner, Pure Data and Arduino to realise interactions and
						visual projections. Reflection on the prototypes led to improvements
						and strengthened the conceptual clarity of the installations.
					</p>
				</div>
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

export default Work9;
