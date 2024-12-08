import "../components/style/work2.css";
import img2 from "../assets/images/BiB/Gallerij.png";
import img1 from "../assets/images/BiB/HOME.png";
import img3 from "../assets/images/BiB/INHOUDSTAFEL.png";
import img4 from "../assets/images/BiB/KUNSTENAAR.png";
import img5 from "../assets/images/BiB/KUNSTWERK – 1.png";
import img6 from "../assets/images/BiB/KUNSTWERK – 2.png";
import img7 from "../assets/images/BiB/KUNSTWERK.png";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

import { useLocation, Link, useNavigate } from "react-router-dom"; // Voor navigatie

// Lees work1.jsx voor uitleg file.
function Work2() {
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

	const images = [img1, img2, img3, img4, img5, img6, img7];

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
					<div className="about-title">Brussel in Beeld</div>
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
							With this project, I aimed to address the lack of visibility for
							smaller art galleries and artists. These galleries are often
							unique and deserve more recognition and visitors. I created a
							platform to help them promote their galleries and reach a wider
							audience interested in discovering special, small-scale art
							spaces, as I believe these often go unnoticed despite offering
							some of the most interesting experiences.
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
						<p>
							I began by researching museum brochures and
							concerthall brochures. I also reviewed magazines, such as De
							Standaard Magazine, along with other visually appealing
							publications, to gather inspiration for layout and design.
							Additionally, I analyzed existing websites to identify areas for
							improvement.
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
						<p>
							After completing the research phase, I started by sketching
							potential layouts for the website. I then examined the inspiration
							sources I had gathered and created a mood board to establish the
							visual direction. Following this, I developed a sitemap to ensure
							proper navigation between the different pages. Next, I created a
							wireframe to outline the structure, and finally, I focused on
							designing the overall look of the website.
						</p>
					</div>
				</motion.div>
				<div className="wrapper">
					<div className="hero-img">
						<img src={img1} alt="" />
					</div>
					<div className="img2">
						<img src={img2} alt="" />
					</div>
					<div className="img1">
						<img src={img3} alt="" />
					</div>
					<div className="img2">
						<img src={img4} alt="" />
					</div>
					<div className="img1">
						<img src={img5} alt="" />
					</div>
					<div className="img2">
						<img src={img6} alt="" />
					</div>
					<div className="img1">
						<img src={img7} alt="" />
					</div>
				</div>
			</div>
			{/* Mobile Section */}
			<div className="mobile">
				<div className="mobile-hero-title">
					<p>Brussel in Beeld</p>
					<hr />
				</div>
				<div className="mobile-tags">
					<p>28/03/2024</p>
					<p>Graphic Design</p>
					<p>Desktop Webdesign</p>
					<hr />
				</div>
				{/* Slideshow container */}
				<div className="mobile-image-caroussel">
					{/* Slideshow container */}
					<div className="slideshow-container">
						{images.map((image, index) => (
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
									onClick={() => openModal(image)}
									style={{ cursor: "pointer" }}
								/>
							</div>
						))}
						<a className="prev" onClick={() => plusSlides(-1)}>
							&#10094;
						</a>
						<a className="next" onClick={() => plusSlides(1)}>
							&#10095;
						</a>
					</div>

					{/* Dots/circles */}

					<div style={{ textAlign: "center" }}>
						{images.map((_, index) => (
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
						With this project, I aimed to address the lack of visibility for
						smaller art galleries and artists. These galleries are often unique
						and deserve more recognition and visitors. I created a platform to
						help them promote their galleries and reach a wider audience
						interested in discovering special, small-scale art spaces, as I
						believe these often go unnoticed despite offering some of the most
						interesting experiences.
					</p>
					<hr />
				</div>
				<div className="mobile-about-title">
					<p>Research: </p>
					<hr />
				</div>
				<div className="mobile-about-text-2">
					<p>
						I began by researching museum brochures and concerthall brochures. I
						also reviewed magazines, such as De Standaard Magazine, along with
						other visually appealing publications, to gather inspiration for
						layout and design. Additionally, I analyzed existing websites to
						identify areas for improvement.
					</p>
					<hr />
				</div>
				<div className="mobile-about-title">
					<p>Process: </p>
					<hr />
				</div>
				<div className="mobile-about-text-3">
					<p>
						After completing the research phase, I started by sketching
						potential layouts for the website. I then examined the inspiration
						sources I had gathered and created a mood board to establish the
						visual direction. Following this, I developed a sitemap to ensure
						proper navigation between the different pages. Next, I created a
						wireframe to outline the structure, and finally, I focused on
						designing the overall look of the website.
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

export default Work2;
