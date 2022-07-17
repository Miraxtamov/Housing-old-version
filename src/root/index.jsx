import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ErrorPage from "../pages/Error";
import { navbar } from "../utils/navbar";

const Root = () => {
	return (
		<Routes>
			<Route element={<Navbar />}>
				<Route path="/" element={<Navigate to={"/home"} />} />
				{navbar?.map((value) => {
					return (
						<Route key={value.id} path={value.path} element={value.element} />
					);
				})}
			</Route>
			<Route path="*" element={<ErrorPage />} />
		</Routes>
	);
};

export default Root;
