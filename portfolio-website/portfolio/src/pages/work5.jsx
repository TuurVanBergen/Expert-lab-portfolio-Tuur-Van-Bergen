import "../components/style/work5.css";
import Footer from "../components/Footer.jsx";
import img1 from "../assets/images/2.png";
import img2 from "../assets/images/3.png";
import img3 from "../assets/images/4.png";
import img4 from "../assets/images/5.png";
import img5 from "../assets/images/6.png";
import img6 from "../assets/images/7.png";
import img7 from "../assets/images/8.png";
import img8 from "../assets/images/9.png";
import img9 from "../assets/images/10.png";
import video1 from "../assets/videos/AFoei.mp4";
import { useLocation, Link, useNavigate } from "react-router-dom"; // Voor navigatie
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

// Lees work1.jsx voor uitleg file.
function Work5() {
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
					<div className="about-title">12 photographs</div>
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
							The experimental video consists of a sequence of 12 photographs,
							created through an intuitive and spontaneous process. The
							photographs, captured in a studio without predetermined
							guidelines, evoke the emotions of the moment. This lack of clear
							structure allows viewers to freely interpret the imagery,
							projecting their own feelings and experiences onto the visual
							narrative.
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
							The music, composed specifically for the video, enhances the
							emotional depth of the work. A viola, paired with guitar pedals,
							creates a unique and evocative soundscape. The music was composed
							first, serving as the foundation for the subsequent editing of the
							video, ensuring a seamless blend of sound and visuals.
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
							This audiovisual creation invites introspection and emotional
							engagement, encouraging viewers to find their own meaning within
							the interplay of images and sound. The result is a deeply personal
							and reflective experience that resonates differently with each
							individual.
						</p>
					</div>
				</motion.div>
				<div className="wrapper">
					<div className="hero-img">
						<video controls>
							<source src={video1} type="video/mp4" />
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
					<div className="img1">
						<img src={img7} alt="" />
					</div>
					<div className="img2">
						<img src={img8} alt="" />
					</div>
				</div>
			</div>
			{/* Mobile Section */}
			<div className="mobile">
				<div className="mobile-hero-title">
					<p>Antwerpen Klinkt Klassiek</p>
					<hr />
				</div>
				<div className="mobile-tags">
					<p>15/11/2023</p>
					<p>Video</p>
					<p>Experimental Film</p>
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

export default Work5;
