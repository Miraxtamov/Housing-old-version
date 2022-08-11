import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import categoryHouse from "../../../../assets/imgs/categoryHouse.png";
import categoryCardHouse from "../../../../assets/icons/categoryCardHouse.svg";
import { CategoryCard1, Container } from "./style";

const CategoryCard = ({ title }) => {
	const [dataItems, setDataItems] = useState([]);
	const navigate = useNavigate();

	const goto = (id) => {
		navigate(`/properties?category_id=${id}`);
	};

	useQuery(
		["getIdCategory"],
		() => {
			return fetch(
				"https://houzing-app.herokuapp.com/api/v1/categories/list"
			).then((res) => res.json());
		},
		{
			onSuccess: (res) => {
				setDataItems(res?.data || []);
			},
			onError: (err) => {
				console.log(err);
			},
		}
	);

	return (
		<Container>
			<CategoryCard1 onClick={() => goto(title.id)}>
				<CategoryCard1.Title>
					<CategoryCard1.Img src={categoryHouse} />
					<CategoryCard1.SvgTitle>
						<CategoryCard1.Svg src={categoryCardHouse} />
						<CategoryCard1.Title>{title?.name}</CategoryCard1.Title>
					</CategoryCard1.SvgTitle>
				</CategoryCard1.Title>
			</CategoryCard1>
		</Container>
	);
};

export default CategoryCard;
