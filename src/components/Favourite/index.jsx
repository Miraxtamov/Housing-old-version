import React, { useState } from "react";
import { useQuery } from "react-query";
import Card from "../Generic/Card";
import { CardContainer, Container } from "./style";

const Favourite = () => {
	const [dataItems, setDataItems] = useState();
	useQuery(
		["favourites"],
		() => {
			return fetch(
				`https://houzing-app.herokuapp.com/api/v1/houses/getAll/favouriteList`,
				{
					method: "GET",
					headers: {
						"Content-type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					},
				}
			).then((res) => res.json());
		},
		{
			onSuccess: (res) => {
				console.log(res?.data);
				setDataItems(res?.data || "No Data");
			},
			onError: (err) => {
				console.log(err);
			},
			refetchOnWindowFocus: false,
			keepPreviousData: true,
		}
	);
	return (
		<Container>
			<Container.Title className="title">Favourite</Container.Title>
			<Container.Description className="description">
				Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
			</Container.Description>
			<div className="favourite-center">
				<CardContainer>
					{dataItems?.map((value) => {
						return <Card key={value.id} info={value} />;
					})}
				</CardContainer>
			</div>
		</Container>
	);
};

export default Favourite;
