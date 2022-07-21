import React from "react";
import AliceCarousel from "react-alice-carousel";
import Card from "../../Generic/Card";
import { Container } from "./style";

const items = [<Card />, <Card />, <Card />, <Card />, <Card />, <Card />];

const Recommended = () => {
	return (
		<Container>
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
