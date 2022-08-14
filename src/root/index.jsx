import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ErrorPage from "../pages/Error";
import { navbar } from "../utils/navbar";
import ProductView from "../components/ProductView";
import SignIn from "../components/Signin";
import SignUp from "../components/Signup";
import Generic from "../pages/Generic";
import Favourite from "../components/Favourite";
import MyProperties from "../components/MyProperties";
import MyProfile from "../components/MyProfile";
import AddNew from "../components/AddNew";

const Root = () => {
	return (
		<>
			<Routes>
				<Route element={<Navbar />}>
					<Route path="/" element={<Navigate to={"/home"} />} />
					<Route
						path="/properties/:id"
						element={<ProductView />}
						param={true}
					/>
					<Route path="/signin" element={<SignIn />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/profile" element={<MyProfile />} />
					<Route path="/myproperties" element={<MyProperties />} />
					<Route path="/favourites" element={<Favourite />} />
					<Route path="/addnew" element={<AddNew />} />
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
