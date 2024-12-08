import "../App.css";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import video1 from "../assets/videos/AFoei.mp4";
import video2 from "../assets/videos/Dans une pièce sombre.mp4";
import video3 from "../assets/videos/kaas.mp4";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import DataTable from "../components/Table.jsx"; // Importeer de lijstcomponent
import "../components/style/Table.css"; // Voeg eventuele specifieke stijl toe

// De dataset die informatie bevat over mijn projecten
const initialData = [
	{
		id: 1,
		date: "15/11/2023",
		title: "Antwerpen Klinkt Klassiek",
		type: "Graphic design",
		link: "More info",
	},
	{
		id: 3,
		date: "09/06/2022",
		title: "Un Poème sur l’absence",
		type: "Video",
		link: "More info",
	},
	{
		id: 2,
		date: "28/03/2024",
		title: "Brussel in Beeld",
		type: "Graphic design",
		link: "More info",
	},
	{
		id: 4,
		date: "26/04/2024",
		title: "12 Photographs",
		type: "Video",
		link: "More info",
	},
	{
		id: 6,
		date: "15/11/2023",
		title: "Illustrations",
		type: "Illustrations",
		link: "More info",
	},
	{
		id: 7,
		date: "15/10/2024",
		title: "Kinetic Light Project",
		type: "Installation",
		link: "More info",
	},
	{
		id: 8,
		date: "5/11/2024",
		title: "BYOB",
		type: "Installation",
		link: "More info",
	},
	{
		id: 9,
		date: "19/11/2024",
		title: "Installation concepts",
		type: "Installation",
		link: "More info",
	},
	{
		id: 10,
		date: "3/12/2024",
		title: "Projection cube",
		type: "Installation",
		link: "More info",
	},
];
function Home() {
	// State voor de gegevens van de projecten en sorteeropties
	const [data, setData] = useState([...initialData]); // Dynamische data die je sorteert
	const [sortOption, setSortOption] = useState({ key: null, order: "asc" });

	// Functie om de sorteeroptie te toggelen
	const toggleSort = (key) => {
		const nextOrder =
			sortOption.key == key && sortOption.order == "asc" ? "desc" : "asc";
		// Update de sorteeropties
		setSortOption({ key, order: nextOrder });
		// Voer sortering uit
		handleSort(key, nextOrder);
	};

	// Functie om de data te sorteren
	const handleSort = (key, order) => {
		const sortedData = [...data].sort((a, b) => {
			if (key == "date") {
				// Sorteer op datum
				const dateA = new Date(a.date.split("/").reverse().join("-"));
				const dateB = new Date(b.date.split("/").reverse().join("-"));
				return order == "asc" ? dateA - dateB : dateB - dateA;
			} else {
				// Sorteer alfabetisch
				return order == "asc"
					? a[key].localeCompare(b[key])
					: b[key].localeCompare(a[key]);
			}
		});
		// Update de gesorteerde data
		setData(sortedData);
	};

	// State voor containerafmetingen
	const containerRef = useRef(null);
	const [containerBounds, setContainerBounds] = useState(null);

	useEffect(() => {
		// Berekent de afmetingen van de container
		if (containerRef.current) {
			const bounds = containerRef.current.getBoundingClientRect();
			setContainerBounds(bounds);
		}
	}, []);

	// Bepaalt de sleep constraints
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
			{/* Hoofdcontainer voor projectelementen */}
			<div
				className="container"
				ref={containerRef}
				style={{
					position: "relative",
					overflow: "hidden",
					height: "100vh",
					width: "100vw",
				}}
			>
				{/* Elk motion-element vertegenwoordigt een project, de motion.div zorgt ervoor dat kan gesleept worden */}
				{containerBounds && (
					<>
						<motion.div
							drag
							dragConstraints={getDragConstraints(480, 360, 70, 150)}
							style={{
								position: "absolute",
								cursor: "grab",
								top: "17.5%",
								left: "4.5%",
							}}
						>
							<div className="element e1 artwork">
								<Link to="/work1">Antwerpen Klinkt Klassiek</Link>
								<p>15/11/2023</p>
								<p>Graphic design</p>
							</div>
						</motion.div>
						<motion.div
							drag
							dragConstraints={getDragConstraints(480, 360, 650, 120)}
							style={{
								position: "absolute",
								cursor: "grab",
								top: "15%",
								left: "42.5%",
							}}
						>
							<div className="element e2 artwork">
								<Link to="/work10">Projection Cube</Link>
								<p>3/12/2024 </p>
								<p>Installation</p>
							</div>
						</motion.div>
						<motion.div
							drag
							dragConstraints={getDragConstraints(480, 360, 850, 350)}
							style={{
								position: "absolute",
								cursor: "grab",
								top: "45%",
								left: "55%",
							}}
						>
							<div className="element e3 artwork">
								<Link to="/work3">Un Poème sur l’absence</Link>
								<p>09/06/2022</p>
								<p>Video</p>
							</div>
						</motion.div>
						<motion.div
							drag
							dragConstraints={getDragConstraints(480, 360, 500, 450)}
							style={{
								position: "absolute",
								cursor: "grab",
								top: "60%",
								left: "32.5%",
							}}
						>
							<div className="element e4 artwork">
								<Link to="/work2">Brussel in Beeld</Link>
								<p>28/03/2024</p>
								<p>Graphic design</p>
							</div>
						</motion.div>
						<motion.div
							drag
							dragConstraints={getDragConstraints(480, 360, 500, 450)}
							style={{
								position: "absolute",
								cursor: "grab",
								top: "30%",
								left: "25%",
							}}
						>
							<div className="element e7 artwork">
								<Link to="/work9">Installation concepts</Link>
								<p>19/11/2024</p>
								<p>Installation</p>
							</div>
						</motion.div>
						<motion.div
							drag
							dragConstraints={getDragConstraints(480, 360, 500, 450)}
							style={{
								position: "absolute",
								cursor: "grab",
								top: "65%",
								left: "80%",
							}}
						>
							<div className="element e8 artwork">
								<Link to="/work8">BYOB</Link>
								<p>5/11/2024</p>
								<p>Installation</p>
							</div>
						</motion.div>
						<motion.div
							drag
							dragConstraints={getDragConstraints(480, 360, 500, 450)}
							style={{
								position: "absolute",
								cursor: "grab",
								top: "15%",
								left: "89%",
							}}
						>
							<div className="element e9 artwork">
								<Link to="/work7">Kinetic Light Project</Link>
								<p>15/10/2024</p>
								<p>Installation</p>
							</div>
						</motion.div>
						<motion.div
							drag
							dragConstraints={getDragConstraints(480, 360, 300, 600)}
							style={{
								position: "absolute",
								cursor: "grab",
								top: "82.5%",
								left: "22.5%",
							}}
						>
							<div className="element e5 artwork">
								<Link to="/work5">12 Photographs</Link>
								<p>26/04/2024</p>
								<p>Video</p>
							</div>
						</motion.div>
						<motion.div
							drag
							dragConstraints={getDragConstraints(480, 360, 1300, 325)}
							style={{
								position: "absolute",
								cursor: "grab",
								top: "40%",
								left: "87.5%",
							}}
						>
							<div className="element e6 artwork">
								<Link to="/work6">Illustrations</Link>
								<p>20/02/2024</p>
								<p>Illustration</p>
							</div>
						</motion.div>
						<motion.div
							drag
							dragConstraints={getDragConstraints(480, 360, -250, 300)}
							style={{
								position: "absolute",
								cursor: "grab",
								top: "37.5%",
								left: "-14.5%",
							}}
						>
							<div className="video1">
								<video width="480px" height="360px" controls>
									<source src={video1} type="video/mp4" />
								</video>
							</div>
						</motion.div>
						<motion.div
							drag
							dragConstraints={getDragConstraints(319, 211, 1000, 100)}
							style={{
								position: "absolute",
								cursor: "grab",
								top: "10%",
								left: "65%",
							}}
						>
							<div className="video2">
								<video width="319px" height="211px" controls>
									<source src={video2} type="video/mp4" />
								</video>
							</div>
						</motion.div>
						<motion.div
							drag
							dragConstraints={getDragConstraints(478, 268, 600, 600)}
							style={{
								position: "absolute",
								cursor: "grab",
								top: "74.5%",
								left: "40%",
							}}
						>
							<div className="video3">
								<video width="478px" height="268px" controls>
									<source src={video3} type="video/mp4" />
								</video>
							</div>
						</motion.div>
					</>
				)}
			</div>
			{/* Mobile Section */}
			<div className="mobile">
				<div className="mobile-hero-text">
					<p>Work</p>
					<hr />
				</div>
				{/* Sorteermenu */}
				<div className="mobile-sort">
					<p>Sort</p>
					{/* Sorteeropties */}
					<div className="sort-menu">
						<p onClick={() => toggleSort("title")}>
							Title{" "}
							{sortOption.key == "title" &&
								(sortOption.order == "asc" ? "↑" : "↓")}
						</p>
						<p onClick={() => toggleSort("date")}>
							Date{" "}
							{sortOption.key == "date" &&
								(sortOption.order == "asc" ? "↑" : "↓")}
						</p>
						<p onClick={() => toggleSort("type")}>
							Type{" "}
							{sortOption.key == "type" &&
								(sortOption.order == "asc" ? "↑" : "↓")}
						</p>
					</div>
					<hr />
				</div>
				{/* Hier wordt de inhoud van de tabel gemaakt. */}
				<div className="mobile-items">
					{data.map((item, index) => (
						<div key={index} className="mobile-item">
							<p className="mobile-title">{item.title}</p>
							<p className="mobile-date">{item.date}</p>
							<div className="mobile-items-right">
								<p className="mobile-type">{item.type}</p>
								<Link to={"/work" + item.id} style={{ width: "18%" }}>
									{item.link}
								</Link>
							</div>

							<hr />
						</div>
					))}
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
			</div>
			{/* Footer-component */}
			<Footer />
		</>
	);
}

export default Home;
