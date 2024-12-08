import "../components/style/work6.css";
import Footer from "../components/Footer.jsx";
import img1 from "../assets/images/Illustrations/img1.jpeg";
import img2 from "../assets/images/Illustrations/img2.jpeg";
import img3 from "../assets/images/Illustrations/img3.jpeg";
import img4 from "../assets/images/Illustrations/img4.jpeg";
import img5 from "../assets/images/Illustrations/img5.jpeg";
import img6 from "../assets/images/Illustrations/img6.jpeg";
import img7 from "../assets/images/Illustrations/img7.png";
import img8 from "../assets/images/Illustrations/img8.jpeg";
import { useLocation, Link, useNavigate } from "react-router-dom"; // Voor navigatie
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
// Lees work1.jsx voor uitleg file.
function Work6() {
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
		const totalSlides = 3; // Aantal slides
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
					<div className="about-title">illustrations</div>
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
							In this project, I create illustrations inspired by my childlike
							drawing style. This approach allows me to work freely and
							uninhibitedly. With bright colors and simple shapes, I want to
							capture the playful simplicity of children's drawings and bring
							the viewer back to childhood. In this project, I create
							illustrations inspired by my childhood drawing style. This
							approach allows me to work freely and uninhibitedly. With bright
							colors and simple shapes, I want to capture the playful simplicity
							of children's drawings and bring the viewer back to childhood.
							This project invites the viewer to see the world through the eyes
							of a child and appreciates spontaneous creativity in our daily
							lives.
						</p>
					</div>
				</motion.div>
				<div className="wrapper">
					<div className="hero-img">
						<img src={img5} alt="" />
					</div>
					<div className="img1">
						<img src={img1} alt="" />
					</div>
					<div className="img2">
						<img src={img2} alt="" />
					</div>
					<div className="img1">
						<img src={img7} alt="" />
					</div>
					<div className="img2">
						<img src={img4} alt="" />
					</div>
					<div className="img1">
						<img src={img6} alt="" />
					</div>
					<div className="img2">
						<img src={img3} alt="" />
					</div>
				</div>
			</div>
			{/* Mobile Section */}
			<div className="mobile">
				<div className="mobile-hero-title">
					<p>illustrations</p>
					<hr />
				</div>
				<div className="mobile-tags">
					<p>20/02/2024</p>
					<p>Illustration</p>
					<p>Pencil on paper</p>
					<hr />
				</div>
				{/* Slideshow container */}
				<div className="mobile-image-caroussel">
					{/* Slideshow container */}
					<div className="slideshow-container">
						{/* Render alle slides dynamisch */}
						{[img1, img2, img3].map((image, index) => (
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
						{[img1, img2, img3].map((_, index) => (
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
						In this project, I create illustrations inspired by my childlike
						drawing style. This approach allows me to work freely and
						uninhibitedly. With bright colors and simple shapes, I want to
						capture the playful simplicity of children's drawings and bring the
						viewer back to childhood. In this project, I create illustrations
						inspired by my childhood drawing style. This approach allows me to
						work freely and uninhibitedly. With bright colors and simple shapes,
						I want to capture the playful simplicity of children's drawings and
						bring the viewer back to childhood. This project invites the viewer
						to see the world through the eyes of a child and appreciates
						spontaneous creativity in our daily lives.
					</p>
					<hr />
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

export default Work6;
