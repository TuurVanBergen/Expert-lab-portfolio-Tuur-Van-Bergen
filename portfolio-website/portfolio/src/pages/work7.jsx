import "../components/style/work7.css";
import Footer from "../components/Footer.jsx";
import img1 from "../assets/images/Sprints/sprint1/img1.jpeg";
import img2 from "../assets/images/Sprints/sprint1/img2.jpg";
import img3 from "../assets/images/Sprints/sprint1/img3.jpg";
import vid2 from "../assets/images/Sprints/sprint1/vid2.mov";
import vid3 from "../assets/images/Sprints/sprint1/vid3.mov";
import vid4 from "../assets/images/Sprints/sprint1/vid4.mov";
import vid5 from "../assets/images/Sprints/sprint1/vid5.mov";
import { useLocation, Link, useNavigate } from "react-router-dom"; // Voor navigatie
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

// Lees work1.jsx voor uitleg file.
function Work7() {
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

	const mediaItems = [
		{ type: "image", src: img1 },
		{ type: "image", src: img2 },
		{ type: "image", src: img3 },
		{ type: "video", src: vid2 },
		{ type: "video", src: vid3 },
		{ type: "video", src: vid4 },
		{ type: "video", src: vid5 },
	];

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
					<div className="about-title">Kinetic Light Project</div>
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
						style={{ top: "300px", left: "55%", position: "absolute" }}
					>
						<p>
							This project combines light, movement and sound into a dynamic
							installation. Using stepper motors and various materials light was
							modulated to create unique patterns. A soundscape, created in Pure
							Data, enhanced the visual experience. The result is an interplay
							of technology and art that explores the relationship between
							light, space and sound.
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
						style={{ top: "600px", left: "15%", position: "absolute" }}
					>
						<p>Light and Material Exploration:</p>
						<p>
							In this phase, the focus was on investigating different light
							sources (such as LEDs and projectors) and materials (water glass,
							mirrors). I tested how light reflects, refracts and absorbs on
							various surfaces. Inspiration was taken from artists such as
							Calder and the Bauhaus. These experiments formed the basis for
							creating dynamic light patterns with movement.
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
						style={{ top: "950px", left: "5%", position: "absolute" }}
					>
						<p>Development and Prototyping:</p>
						<p>
							A stepper motor (28BYJ-48) was used to perform movements performed
							in a controlled manner. The movement of the water was synchronised
							with a light source to create dynamic projections on a wall. Sound
							effects were generated with Pure Data, where ambient sound and
							noise feedback were used to add an extra dimension to the
							installation. During this phase different configurations and
							methods were tested.
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
						style={{ top: "1450px", left: "50%", position: "absolute" }}
					>
						<p>Outcome and Reflection:</p>
						<p>
							The end result was an installation in which light and water merged
							to create changing patterns, supported by sound effects. The
							projections had a strong visual effect, but the light source could
							be further enhanced for more intense reflections. The installation
							shows the power of combining technology and art, with scope for
							further refinement of both engine performance and the integration
							of light and sound.
						</p>
					</div>
				</motion.div>
				<div className="wrapper">
					<div className="hero-img">
						<video controls>
							<source src={vid2} type="video/mp4" />
						</video>
					</div>
					<div className="img2">
						<video controls>
							<source src={vid2} type="video/mp4" />
						</video>
					</div>
					<div className="img1">
						<video controls>
							<source src={vid3} type="video/mp4" />
						</video>
					</div>
					<div className="img2">
						<video controls>
							<source src={vid4} type="video/mp4" />
						</video>
					</div>
					<div className="img1">
						<video controls>
							<source src={vid5} type="video/mp4" />
						</video>
					</div>
				</div>
			</div>
			{/* Mobile Section */}
			<div className="mobile">
				<div className="mobile-hero-title">
					<p>Kinetic Light Project</p>
					<hr />
				</div>
				<div className="mobile-tags">
					<p>15/10/2024</p>
					<p>Installation</p>
					<p>Light</p>
					<hr />
				</div>
				{/* Slideshow container */}
				<div className="mobile-image-caroussel">
					{/* Slideshow container */}
					<div className="slideshow-container">
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
									<video controls>
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
						{mediaItems.map((_, index) => (
							<span
								key={index}
								className={`dot ${slideIndex === index + 1 ? "active" : ""}`}
								onClick={() => currentSlide(index + 1)}
							></span>
						))}
					</div>

					{/* Modaal */}
					<div className={`modal ${isModalOpen ? "active" : ""}`}>
						{modalImage && (
							<>
								{modalImage.endsWith(".mov") || modalImage.endsWith(".mp4") ? (
									<video controls>
										<source src={modalImage} type="video/mp4" />
									</video>
								) : (
									<img src={modalImage} alt="Large View" />
								)}
							</>
						)}
						<button className="modal-close" onClick={closeModal}>
							&times;
						</button>
					</div>
				</div>
				<div className="mobile-about-title">
					<p>About: </p>
					<hr />
				</div>
				<div className="mobile-about-text-1">
					<p>
						This project combines light, movement and sound into a dynamic
						installation. Using stepper motors and various materials light was
						modulated to create unique patterns. A soundscape, created in Pure
						Data, enhanced the visual experience. The result is an interplay of
						technology and art that explores the relationship between light,
						space and sound.
					</p>
					<hr />
				</div>
				<div className="mobile-about-title">
					<p>Development and Prototyping: </p>
					<hr />
				</div>
				<div className="mobile-about-text-2">
					<p>
						In this phase, the focus was on investigating different light
						sources (such as LEDs and projectors) and materials (water glass,
						mirrors). I tested how light reflects, refracts and absorbs on
						various surfaces. Inspiration was taken from artists such as Calder
						and the Bauhaus. These experiments formed the basis for creating
						dynamic light patterns with movement.
					</p>
					<hr />
				</div>
				<div className="mobile-about-title">
					<p>Process: </p>
					<hr />
				</div>
				<div className="mobile-about-text-3">
					<p>
						A stepper motor (28BYJ-48) was used to perform movements performed
						in a controlled manner. The movement of the water was synchronised
						with a light source to create dynamic projections on a wall. Sound
						effects were generated with Pure Data, where ambient sound and noise
						feedback were used to add an extra dimension to the installation.
						During this phase different configurations and methods were tested.
					</p>
				</div>
				<div className="mobile-about-title">
					<p>Outcome and Reflection:</p>
					<hr />
				</div>
				<div className="mobile-about-text-3">
					<p>
						The end result was an installation in which light and water merged
						to create changing patterns, supported by sound effects. The
						projections had a strong visual effect, but the light source could
						be further enhanced for more intense reflections. The installation
						shows the power of combining technology and art, with scope for
						further refinement of both engine performance and the integration of
						light and sound.
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

export default Work7;
