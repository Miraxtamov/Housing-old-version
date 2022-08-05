import React from "react";
import FilterSearchButton from "../FilterSearchButton";
import Carousel1 from "./Carousel";
import Category from "./Category";
import Choose from "./Choose";
import PopularHome from "./PopularHome";
import RecentPropertiesRent from "./RecentPropertiesRent";
import Recommended from "./Recommended";
import { Container } from "./style";
import Testimonials from "./Testimonials";

const Home = () => {
	return (
		<Container>
			<FilterSearchButton />
			<Carousel1 />
			<Recommended />
			<Choose />
			<Category />
			<PopularHome />
			<RecentPropertiesRent />
			<Testimonials />
		</Container>
	);
};

export default Home;
