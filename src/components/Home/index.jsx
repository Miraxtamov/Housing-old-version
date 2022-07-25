import React from "react";
import FilterSearchButton from "../FilterSearchButton";
import Carousel1 from "./Carousel";
import Category from "./Category";
import Choose from "./Choose";
import Recommended from "./Recommended";
import { Container } from "./style";

const Home = () => {
	return (
		<Container>
			<FilterSearchButton/>
			<Carousel1 />
			<Recommended />
			<Choose />
			<Category />
		</Container>
	);
};

export default Home;
