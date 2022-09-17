import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Main from "./ProductMain";
import PhotoBox from "./PhotoBox";
import { Container } from "./style";

export const ProductView = () => {
	const [house, setHouse] = useState();
	const { id } = useParams();

	useEffect(() => {
		fetch(
			`https://houzing-app.herokuapp.com/api/v1/houses/${id?.replace(":", "")}`,
			{
				method: "GET",
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			}
		)
			.then((res) => res.json())
			.then((res) => setHouse(res?.data));
	}, [id]);
	console.log(house);

	// useQuery(
	// 	"propertiesProduct",
	// 	() => {
	// 		return fetch(
	// 			`https://houzing-app.herokuapp.com/api/v1/houses//v1/houses/${id?.replace(
	// 				":",
	// 				""
	// 			)}`,
	// 			{
	// 				method: "GET",
	// 				headers: {
	// 					Authorization: `Bearer ${localStorage.getItem("token")}`,
	// 				},
	// 			}
	// 		).then((res) => res.json());
	// 	},
	// 	{
	// 		onSuccess: (res) => {
	// 			setHouse(res?.data);
	// 			console.log(res?.data ,"Bu data")
	// 		},
	// 		onError: (err) => {
	// 			console.log(err);
	// 		},
	// 			refetchOnWindowFocus: false,
	// 			keepPreviousData: true,
	// 	}
	// );

	return (
		<Container>
			<PhotoBox house={house}/>
			<Main house={house} />
		</Container>
	);
};

export default ProductView;
