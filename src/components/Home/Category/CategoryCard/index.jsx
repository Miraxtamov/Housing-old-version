import React from "react";
import categoryHouse from "../../../../assets/imgs/categoryHouse.png";
import categoryCardHouse from "../../../../assets/icons/categoryCardHouse.svg";
import { CategoryCard1, Container } from "./style";

const CategoryCard = ({ info }) => {
	return (
		<Container>
			<CategoryCard1>
				<CategoryCard1.Title>
					<CategoryCard1.Img src={categoryHouse} />
					<CategoryCard1.SvgTitle>
						<CategoryCard1.Svg src={categoryCardHouse} />
						<CategoryCard1.Title>{info?.category?.name}</CategoryCard1.Title>
					</CategoryCard1.SvgTitle>
				</CategoryCard1.Title>
			</CategoryCard1>
		</Container>
	);
};

export default CategoryCard;
