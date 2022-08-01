import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import { useQuery } from "react-query";
import prev from "../../../../assets/icons/prev.svg";
import next from "../../../../assets/icons/next.svg";
import { ArrowImg, ArrowsImg, Container, Wrapper } from "./style";
import Card from "../../../Generic/Card";

const Recommended = () => {
	const slider = useRef();

	const [dataItems, setDataItems] = useState();

	useQuery(
		"recommended",
		() => {
			return fetch("https://houzing-app.herokuapp.com/api/v1/houses/list").then(
				(res) => res.json()
			);
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
		<Wrapper>
			<Container>
				<Container.Title className="title">Recommended</Container.Title>
				<Container.Description className="description">
					Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
				</Container.Description>
				<Container.Card>
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
					<AliceCarousel
						className="alice-carousel__prev-btn
						alice-carousel__next-btn"
						ref={slider}
						responsive={{
							0: {
								items: 1,
							},
							1024: {
								items: 3,
							},
						}}
						mouseTracking
						items={dataItems}
					>
						{dataItems?.map((value) => {
							return <Card key={value.id} info={value} />;
						})}
					</AliceCarousel>
				</Container.Card>
			</Container>
		</Wrapper>
	);
};

export default Recommended;
