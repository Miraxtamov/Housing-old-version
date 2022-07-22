import React from "react";
import AliceCarousel from "react-alice-carousel";
import Card from "../../Generic/Card";
import { Container } from "./style";

const items = [<Card />, <Card />, <Card />, <Card />, <Card />, <Card />];

const Recommended = () => {
	return (
		<Container>
			<Container.Title className="title">Recommended</Container.Title>
			<Container.Description className="description">
				Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
			</Container.Description>
			<AliceCarousel
				responsive={{
					0: {
						items: 1,
					},
					1024: {
						items: 3,
					},
				}}
				mouseTracking
				items={items}
			/>
		</Container>
	);
};

export default Recommended;
