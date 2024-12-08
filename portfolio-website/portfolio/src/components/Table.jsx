import React, { useState } from "react";
import "../components/style/Table.css";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";

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
		id: 5,
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

function DataTable() {
	// State om de gesorteerde data op te slaan
	const [data, setData] = useState(initialData);

	// State om bij te houden op welke key wordt gesorteerd
	const [sortKey, setSortKey] = useState(null);

	// State om de volgorde (oplopend/aflopend) bij te houden
	const [isDescending, setIsDescending] = useState(false);

	// Functie om de data te sorteren op basis van een key
	const handleSort = (key) => {
		const sortedData = [...data].sort((a, b) => {
			if (key === "date") {
				// Logica voor het sorteren van de data
				const dateA = new Date(a.date.split("/").reverse().join("-"));
				const dateB = new Date(b.date.split("/").reverse().join("-"));
				return isDescending ? dateB - dateA : dateA - dateB;
			} else {
				// Alfabetische sortering voor andere kolommen
				return isDescending
					? b[key].localeCompare(a[key])
					: a[key].localeCompare(b[key]);
			}
		});
		// Update de gesorteerde data
		setData(sortedData);
		// Stelt de huidige key in
		setSortKey(key);
		// Wisselt de volgorde
		setIsDescending(!isDescending);
	};
	return (
		<div className="data-table">
			<table>
				{/* Tabelstructuur */}
				<thead>
					<tr>
						{/* Sorteer mogelijkheden, bij een click event wordt de aangekoppelde code uitgevoerd */}
						<td onClick={() => handleSort("date")}>
							Date {sortKey == "date" ? (isDescending ? "↓" : "↑") : ""}
						</td>
						<td onClick={() => handleSort("title")}>
							Title {sortKey == "title" ? (isDescending ? "↓" : "↑") : ""}
						</td>
						<td onClick={() => handleSort("type")}>
							Type {sortKey == "type" ? (isDescending ? "↓" : "↑") : ""}
						</td>
						<td></td>
					</tr>
				</thead>
				<tbody>
					{/* Dynamisch genereren van de tabel inhoud */}
					{data.map((item, index) => (
						<tr key={index}>
							<td>{item.date}</td>
							<td>{item.title}</td>
							<td>{item.type}</td>
							<td>
								{/* Link naar de specifieke work-pagina */}
								<Link to={"/work" + item.id}>{item.link}</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			{/* Footer component */}
			<Footer />
		</div>
	);
}

export default DataTable;
