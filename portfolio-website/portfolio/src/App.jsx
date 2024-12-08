import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "../src/pages/home.jsx";
import DataTable from "./components/Table.jsx"; // Zorg dat dit de tabelcomponent is
import About from "../src/pages/about.jsx";
import Work1 from "../src/pages/work1.jsx";
import Work2 from "../src/pages/work2.jsx";
import Work3 from "../src/pages/work3.jsx";
import Work4 from "../src/pages/work4.jsx";
import Work5 from "../src/pages/work5.jsx";
import Work6 from "../src/pages/work6.jsx";
import Work7 from "../src/pages/work7.jsx";
import Work8 from "../src/pages/work8.jsx";
import Work9 from "../src/pages/work9.jsx";
import Work10 from "../src/pages/work10.jsx";
function App() {
	// State om bij te houden of de lijstweergave actief is
	const [isListView, setIsListView] = useState(false);

	// Functie om tussen lijst- en standaardweergave te schakelen
	const toggleListView = (value) => {
		console.log("Toggle list view:", value);
		setIsListView(value);
	};

	return (
		// Router zorgt voor navigatie binnen de applicatie
		<Router>
			<Header toggleListView={toggleListView} />
			<Routes>
				<Route path="/" element={isListView ? <DataTable /> : <Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/work1" element={<Work1 />} />
				<Route path="/work2" element={<Work2 />} />
				<Route path="/work3" element={<Work3 />} />
				<Route path="/work4" element={<Work4 />} />
				<Route path="/work5" element={<Work5 />} />
				<Route path="/work6" element={<Work6 />} />
				<Route path="/work7" element={<Work7 />} />
				<Route path="/work8" element={<Work8 />} />
				<Route path="/work9" element={<Work9 />} />
				<Route path="/work10" element={<Work10 />} />
			</Routes>
		</Router>
	);
}

export default App;
