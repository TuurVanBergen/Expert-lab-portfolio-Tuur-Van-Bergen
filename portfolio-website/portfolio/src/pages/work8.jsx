import "../components/style/work8.css";
import Footer from "../components/Footer.jsx";
import img1 from "../assets/images/Sprints/sprint2/img1.jpeg";
import img2 from "../assets/images/Sprints/sprint2/img2.jpeg";
import img3 from "../assets/images/Sprints/sprint2/img3.jpg";
import vid1 from "../assets/images/Sprints/sprint2/vid1.mp4";
import vid2 from "../assets/images/Sprints/sprint2/vid2.mp4";
import vid3 from "../assets/images/Sprints/sprint2/vid3.mp4";
import { useLocation, Link, useNavigate } from "react-router-dom"; // Voor navigatie

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
// Lees work1.jsx voor uitleg file.
function Work8() {
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

	const mediaItems = [
		{ type: "image", src: img1 },
		{ type: "image", src: img2 },
		{ type: "image", src: img3 },
		{ type: "video", src: vid1 },
		{ type: "video", src: vid2 },
		{ type: "video", src: vid3 },
	];

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
					<div className="about-title">BYOB</div>
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
							The interactive installation for BYOB invites visitors to
							experience through through movement and sound to create a unique
							audiovisual experience create. The system uses Mediapipe,
							TouchDesigner, and Pure Data to process body movements and sounds
							in real-time and translate them into dynamic visuals and
							soundscapes. Through iterative testing and refining, the design
							was adapted based on user feedback, with a focus on usability and
							impactful visuals.
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
						style={{ top: "800px", left: "30%", position: "absolute" }}
					>
						<p>Light and Material Exploration:</p>
						<p>
							The process began with defining the concept: an interactive
							installation that translates movements into sound and visuals.
							Brainstorming sessions focused on the theme ‘silence’ and
							interaction within a 3x3-metre space. Inspiration was drawn from
							artists such as Ryoji Ikeda, Zimoun, and Golan Levin.
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
						style={{ top: "1150px", left: "25%", position: "absolute" }}
					>
						<p>Development and Prototyping:</p>
						<p>
							The installation uses Mediapipe for motion detection,
							TouchDesigner for generating visuals, and Pure Data for the
							soundscape. Motion data influences sound effects and visuals on a
							projection screen. Iterative prototyping helped to overcome solve
							technical challenges, such as consistent data transfer and visual
							impact, solved.
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
						className="about-text-4"
						style={{ top: "1700px", left: "50%", position: "absolute" }}
					>
						<p>Outcome and Reflection:</p>
						<p>
							Through testing with different age groups, the installation was
							evaluated for user-friendliness and responsiveness. Feedback led
							to improvements such as brighter colours, more intuitive
							interactions, and refined filters in Pure Data. This resulted in a
							more intuitive and impactful experience for users.
						</p>
					</div>
				</motion.div>
				<div className="wrapper">
					<div className="hero-img">
						<video controls>
							<source src={vid2} type="video/mp4" />
						</video>
					</div>
					<div className="img1">
						<img src={img1} alt="" />
					</div>
					<div className="img2">
						<img src={img2} alt="" />
					</div>
					<div className="img2">
						<video controls>
							<source src={vid1} type="video/mp4" />
						</video>
					</div>
					<div className="img1">
						<video controls>
							<source src={vid3} type="video/mp4" />
						</video>
					</div>
				</div>
			</div>
			{/* Mobile Section */}
			<div className="mobile">
				<div className="mobile-hero-title">
					<p>BYOB</p>
					<hr />
				</div>
				<div className="mobile-tags">
					<p>5/11/2024</p>
					<p>Installation</p>
					<p>Sound art</p>
					<hr />
				</div>
				{/* Slideshow container */}
				<div className="mobile-image-caroussel">
					{/* Slideshow container */}
					<div className="slideshow-container">
						{/* Render alle slides dynamisch */}
						{mediaItems.map((item, index) => (
							<div
								key={index}
								className={`mySlides ${
									slideIndex === index + 1 ? "active-slide" : ""
								}`}
								style={{
									display: slideIndex === index + 1 ? "block" : "none",
								}}
							>
								{item.type === "image" ? (
									<img
										src={item.src}
										alt={`Slide ${index + 1}`}
										onClick={() => openModal(item.src)}
										style={{ cursor: "pointer" }}
									/>
								) : (
									<video controls onClick={() => openModal(item.src)}>
										<source src={item.src} type="video/mp4" />
									</video>
								)}
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
						{[img1, img2, img3, vid1, vid2, vid3].map((_, index) => (
							<span
								key={index}
								className={`dot ${slideIndex == index + 1 ? "active" : ""}`}
								onClick={() => currentSlide(index + 1)}
							></span>
						))}
					</div>

					{/* Modaal */}
					<div className={`modal ${isModalOpen ? "active" : ""}`}>
						{modalImage && (
							<>
								{modalImage.endsWith(".mp4") ? (
									<video controls>
										<source src={modalImage} type="video/mp4" />
									</video>
								) : (
									<img src={modalImage} alt="Large View" />
								)}
							</>
						)}
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
						The interactive installation for BYOB invites visitors to experience
						through through movement and sound to create a unique audiovisual
						experience create. The system uses Mediapipe, TouchDesigner, and
						Pure Data to process body movements and sounds in real-time and
						translate them into dynamic visuals and soundscapes. Through
						iterative testing and refining, the design was adapted based on user
						feedback, with a focus on usability and impactful visuals.
					</p>
					<hr />
				</div>
				<div className="mobile-about-title">
					<p>Research: </p>
					<hr />
				</div>
				<div className="mobile-about-text-2">
					<p>
						The process began with defining the concept: an interactive
						installation that translates movements into sound and visuals.
						Brainstorming sessions focused on the theme ‘silence’ and
						interaction within a 3x3-metre space. Inspiration was drawn from
						artists such as Ryoji Ikeda, Zimoun, and Golan Levin.
					</p>
					<hr />
				</div>
				<div className="mobile-about-title">
					<p>Process: </p>
					<hr />
				</div>
				<div className="mobile-about-text-3">
					<p>
						The installation uses Mediapipe for motion detection, TouchDesigner
						for generating visuals, and Pure Data for the soundscape. Motion
						data influences sound effects and visuals on a projection screen.
						Iterative prototyping helped to overcome solve technical challenges,
						such as consistent data transfer and visual impact, solved.
					</p>
				</div>
				<div className="mobile-about-title">
					<p>User Testing: </p>
					<hr />
				</div>
				<div className="mobile-about-text-3">
					Through testing with different age groups, the installation was
					evaluated for user-friendliness and responsiveness. Feedback led to
					improvements such as brighter colours, more intuitive interactions,
					and refined filters in Pure Data. This resulted in a more intuitive
					and impactful experience for users.
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

export default Work8;
