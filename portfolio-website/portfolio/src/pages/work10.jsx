import "../components/style/work10.css";
import img1 from "../assets/images/Sprints/sprint4/img1.jpeg";
import img2 from "../assets/images/Sprints/sprint4/img2.jpeg";
import img3 from "../assets/images/Sprints/sprint4/img3.jpeg";
import img4 from "../assets/images/Sprints/sprint4/img4.jpeg";
import img5 from "../assets/images/Sprints/sprint4/img5.jpeg";
import img6 from "../assets/images/Sprints/sprint4/img6.jpeg";
import vid1 from "../assets/images/Sprints/sprint4/vid1.mov";
import { useLocation, Link } from "react-router-dom"; // Voor navigatie
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
// Lees work1.jsx voor uitleg file.
function Work10() {
	const location = useLocation();
	const currentPage = parseInt(location.pathname.split("/work")[1], 10) || 1;

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

	const mediaItems = [
		{ type: "image", src: img1 },
		{ type: "image", src: img2 },
		{ type: "image", src: img3 },
		{ type: "image", src: img4 },
		{ type: "image", src: img5 },
		{ type: "image", src: img6 },
		{ type: "video", src: vid1 },
	];

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
					<div className="about-title">Projection cube</div>
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
							The 270-degree projection cube combines technical precision with
							creative visuals. The project required careful planning
							collaboration, and adjustments to challenges. The final result
							shows the potential of interactive projection screens in
							experimental settings.
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
						<p>Preparations and Planning:</p>
						<p>
							Prior to building the projection cube, an comprehensive planning
							using checklists colour codes, and storypoints. Material research
							and a detailed bill of materials provided a solid foundation.
							Despite some challenges, such as too small a space and
							miscommunication about materials, the planning was effectively
							adjusted.
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
						<p>Structure of the Projection Cube:</p>
						<p>
							The project began by tearing down an unsuitable structure,
							followed by building a solid frame based on based on a sketch and
							correct dimensions. Projection screens were attached, and
							projectors were placed to achieve optimal projection despite
							height limitations. Cables and power supply were strategically
							installed.
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
						<p>Interactivity and Test phase:</p>
						<p>
							The projection cube was equipped with interactive visuals that via
							TouchDesigner and MadMapper convert sound signals into
							projections. This was tested for user-friendliness and technical
							operation. The end result was an interactive installation that
							functions effectively and provides an immersive experience
							offering.
						</p>
					</div>
				</motion.div>
				<div className="wrapper">
					<div className="hero-img">
						<video controls>
							<source src={vid1} type="video/mp4" />
						</video>
					</div>
					<div className="img1">
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
				</div>
			</div>
			{/* Mobile Section */}
			<div className="mobile">
				<div className="mobile-hero-title">
					<p>Projection cube</p>
					<hr />
				</div>
				<div className="mobile-tags">
					<p>03/12/2024</p>
					<p>Installation</p>
					<p>Projection art</p>
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
						The 270-degree projection cube combines technical precision with
						creative visuals. The project required careful planning
						collaboration, and adjustments to challenges. The final result shows
						the potential of interactive projection screens in experimental
						settings.
					</p>
					<hr />
				</div>
				<div className="mobile-about-title">
					<p>Preparations and Planning:</p>
					<hr />
				</div>
				<div className="mobile-about-text-2">
					<p>
						Prior to building the projection cube, an comprehensive planning
						using checklists colour codes, and storypoints. Material research
						and a detailed bill of materials provided a solid foundation.
						Despite some challenges, such as too small a space and
						miscommunication about materials, the planning was effectively
						adjusted.
					</p>
					<hr />
				</div>
				<div className="mobile-about-title">
					<p>Structure of the Projection Cube:</p>
					<hr />
				</div>
				<div className="mobile-about-text-3">
					<p>
						The project began by tearing down an unsuitable structure, followed
						by building a solid frame based on based on a sketch and correct
						dimensions. Projection screens were attached, and projectors were
						placed to achieve optimal projection despite height limitations.
						Cables and power supply were strategically installed.
					</p>
				</div>
				<div className="mobile-about-title">
					<p>Interactivity and Test phase:</p>
					<hr />
				</div>
				<div className="mobile-about-text-3">
					<p>
						The projection cube was equipped with interactive visuals that via
						TouchDesigner and MadMapper convert sound signals into projections.
						This was tested for user-friendliness and technical operation. The
						end result was an interactive installation that functions
						effectively and provides an immersive experience offering.
					</p>
				</div>
				<div className="mobile-bottom-nav">
					<div className="nav-previous">
						{currentPage > 1 ? (
							<Link to={`/work${currentPage - 1}`}>Previous</Link>
						) : (
							<Link to="/">Back to Work</Link>
						)}
					</div>
					<div className="nav-next">
						{currentPage < 10 ? (
							<Link to={`/work${currentPage + 1}`}>Next</Link>
						) : (
							<Link to="/">Back to Work</Link>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default Work10;
