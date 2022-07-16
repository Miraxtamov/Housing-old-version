import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root = () => {
	return (
		<Routes>
			<Route element={<Navbar />}>
        <Route path="/" element={<h1>Home</h1>}/>
      </Route>
		</Routes>
	);
};

export default Root;
