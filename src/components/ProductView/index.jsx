import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Main from "./ProductMain";
import PhotoBox from "./PhotoBox";
import { Container } from "./style";

export const ProductView = () => {
	const [house, setHouse] = useState();
	const params = useParams();

	useQuery(
		"propertiesProduct",
		() => {
			return (
				fetch(`https://houzing-app.herokuapp.com/api/v1/houses/${params.id}`),
				{
					method: "GET",
					
				}.then((res) => res.json())
			);
		},
		{
			onSuccess: (res) => {
				setHouse(res?.data);
				console.log(res?.data);
			},
			onError: (err) => {
				console.log(err);
			},
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
