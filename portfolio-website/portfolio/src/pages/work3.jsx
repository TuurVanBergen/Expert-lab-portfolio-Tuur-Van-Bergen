import "../components/style/work3.css";
import Footer from "../components/Footer.jsx";
import video1 from "../assets/videos/Un poème sur l'absence.mp4";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation, Link, useNavigate } from "react-router-dom"; // Voor navigatie

// Lees work1.jsx voor uitleg file.
function Work3() {
	const location = useLocation();
	const currentPage = parseInt(location.pathname.split("/work")[1], 10) || 1;

	const navigate = useNavigate();

	// Functie om naar een andere pagina te navigeren en naar boven te scrollen
	const navigateToPage = (page) => {
		navigate(page); // Navigeer naar de opgegeven pagina
		window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll soepel naar boven
	};

	const containerRef = useRef(null);
	const [containerBounds, setContainerBounds] = React.useState(null);

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
					<div className="about-title">Un poème sur l'absence​​​​​​​</div>
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
						style={{ top: "355px", left: "58%", position: "absolute" }}
					>
						<p>
							I created an experimental video based on a poem by Esther Granek,
							inspired by the avant-garde style of Man Ray. The central theme is
							loneliness, which is explored through dark images that visually
							capture the desolate feelings of the poem. <br /> <br />
							The images are carefully composed to create an atmosphere of
							melancholy, with shadows and abstract shapes enhancing the
							emotional impact. Below these images, I added a soundtrack that
							supports the somber ambience, immersing the viewer in the
							experience of loneliness.
						</p>
					</div>
				</motion.div>
				<div className="wrapper">
					<div className="hero-video">
						<video controls style={{ width: "100%" }}>
							<source src={video1} type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					</div>
				</div>
			</div>
			{/* Mobile Section */}
			<div className="mobile">
				<div className="mobile-hero-title">
					<p>Un poème sur l'absence​​​​​​​</p>
					<hr />
				</div>
				<div className="mobile-tags">
					<p>09/06/2022</p>
					<p>Video</p>
					<p>Experimental Film</p>
					<hr />
				</div>
				<div className="mobile-video">
					<video controls style={{ width: "100%" }}>
						<source src={video1} type="video/mp4" />
						Your browser does not support the video tag.
					</video>
					<hr />
				</div>
				<div className="mobile-about-title">
					<p>About: </p>
					<hr />
				</div>
				<div className="mobile-about-text-1">
					<p>
						I created an experimental video based on a poem by Esther Granek,
						inspired by the avant-garde style of Man Ray. The central theme is
						loneliness, which is explored through dark images that visually
						capture the desolate feelings of the poem. <br /> <br />
						The images are carefully composed to create an atmosphere of
						melancholy, with shadows and abstract shapes enhancing the emotional
						impact. Below these images, I added a soundtrack that supports the
						somber ambience, immersing the viewer in the experience of
						loneliness.
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

export default Work3;
