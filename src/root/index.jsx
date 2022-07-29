import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ErrorPage from "../pages/Error";
import { navbar } from "../utils/navbar";
import ProductView from "../components/ProductView";
import SignIn from "../components/Signin";

const Root = () => {
	return (
		<>
			<Routes>
				<Route element={<Navbar />}>
					<Route path="/" element={<Navigate to={"/home"} />} />
					<Route path="/properties:id" element={<ProductView />} />
					<Route path="/signin" element={<SignIn />} />
					{navbar?.map((value) => {
						return (
							<Route key={value.id} path={value.path} element={value.element} />
						);
					})}
				</Route>
				<Route path="*" element={<ErrorPage />} />
			</Routes>
			<Footer />
		</>
	);
};

export default Root;
