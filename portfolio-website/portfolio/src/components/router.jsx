import { Routes, Route } from "react-router-dom";
import About from "../pages/about.jsx";
import Home from "../pages/home.jsx";
import Work1 from "../pages/work1";
import Work2 from "../pages/work2";
import Work3 from "../pages/work3";
import Work4 from "../pages/work4";
import Work5 from "../pages/work5";
import Work6 from "../pages/work6";
import Work7 from "../pages/work7";
import Work8 from "../pages/work8";
import Work9 from "../pages/work9";
import Work10 from "../pages/work10";
import React from "react";

// Definieert alle routes van de website.
function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
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
	);
}

export default AppRoutes;
