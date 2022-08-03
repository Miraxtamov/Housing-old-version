import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Main from "./ProductMain";
import PhotoBox from "./PhotoBox";
import { Container } from "./style";

export const ProductView = () => {
	const [house, setHouse] = useState();
	const { id } = useParams();

	useQuery(
		"propertiesProduct",
		() => {
			return fetch(
				`https://houzing-app.herokuapp.com/api/v1/houses//v1/houses/${id?.replace(
					":",
					""
				)}`,
				{
					method: "GET",
					headers: {
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					},
				}
			).then((res) => res.json());
		},
		{
			onSuccess: (res) => {
				setHouse(res?.data);
				console.log(res?.data ,"Bu data");
			},
			onError: (err) => {
				console.log(err);
			},
			keepPreviousData: true,
			refetchOnWindowFocus: false,
		}
	);

	return (
		<Container>
			<PhotoBox />
			<Main house={house} />
		</Container>
	);
};

export default ProductView;
