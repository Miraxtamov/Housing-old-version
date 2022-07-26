import React, { useState, useRef } from "react";
import prev from "../../../assets/icons/prev.svg";
import next from "../../../assets/icons/next.svg";
import AliceCarousel from "react-alice-carousel";
import { useQuery } from "react-query";
import CategoryCard from "./CategoryCard";
import { ArrowImg, ArrowsImg, Container } from "./style";

const Category = () => {
	const slider = useRef();

	const [dataItems, setDataItems] = useState();

	useQuery(
		"category",
		() => {
			return fetch(
				"https://houzing-app.herokuapp.com/api/v1/categories/list"
			).then((res) => res.json());
		},
		{
			onSuccess: (res) => {
				setDataItems(res?.data || []);
				console.log(res?.data);
			},
			onError: (err) => {
				console.log(err);
			},
		}
	);

	return (
		<Container>
			<ArrowsImg>
				<ArrowImg
					className="left"
					src={prev}
					onClick={() => slider?.current?.slidePrev()}
				/>
				<ArrowImg
					className="right"
					src={next}
					onClick={() => slider?.current?.slideNext()}
				/>
			</ArrowsImg>
			<Container.Title className="title">Category</Container.Title>
			<Container.Desc className="description">
				Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
			</Container.Desc>
			<AliceCarousel
				className="alice-carousel__prev-btn
						alice-carousel__next-btn"
				ref={slider}
				responsive={{
					0: {
						items: 1,
					},
					1024: {
						items: 4,
					},
				}}
				mouseTracking
				items={dataItems}
			>
				{dataItems?.map((value) => {
					return <CategoryCard key={value.id} title={value} />;
				})}
			</AliceCarousel>
		</Container>
	);
};

export default Category;
