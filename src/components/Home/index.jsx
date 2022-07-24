import React from "react";
import Carousel1 from "./Carousel";
import Category from "./Category";
import Choose from "./Choose";
import Recommended from "./Recommended";
import { Container } from "./style";

const Home = () => {
	return (
		<Container>
			<Carousel1 />
			<Recommended />
			<Choose />
			<Category />
		</Container>
	);
};

export default Home;
