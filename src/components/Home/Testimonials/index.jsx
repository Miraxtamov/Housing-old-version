import React, { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import prev from "../../../assets/icons/prev.svg";
import next from "../../../assets/icons/next.svg";
import TestimonialsCard from "../../Generic/TestimonialsCard";
import { ArrowImg, ArrowsImg, Container, Wrapper } from "./style";

const items = [
	<TestimonialsCard />,
	<TestimonialsCard />,
	<TestimonialsCard />,
	<TestimonialsCard />,
	<TestimonialsCard />,
];

const Testimonials = () => {
	const slider = useRef();

	return (
		<Wrapper>
			<Container>
				<Container.Title className="title">Testimonials</Container.Title>
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
						items={items}
					/>
				</Container.Card>
			</Container>
		</Wrapper>
	);
};

export default Testimonials;
