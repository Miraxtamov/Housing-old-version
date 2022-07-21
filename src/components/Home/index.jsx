import React from "react";
import Carousel1 from "./Carousel";
import Recommended from "./Recommended";
import { Container } from "./style";

const Home = () => {
	return (
		<Container>
			<Carousel1/>
      <Recommended/>
		</Container>
	);
};

export default Home;
