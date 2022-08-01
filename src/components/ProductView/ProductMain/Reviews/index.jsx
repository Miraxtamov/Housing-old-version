import React from "react";
import { Progress } from "antd";
import { Container, Description, Title, Wrapper } from "./style";
import ReviewsCard from "../../../Generic/ReviewsCard";

const Reviews = () => {
	const progressStyle = {
		format: (percent) => percent / 10,
		status: "active",
		width: "100%",
		size: "small",
	};

	return (
		<Container>
			<Title>4.67 (14 reviews)</Title>
			<Wrapper style={{ marginBottom: "23px" }}>
				<Wrapper>
					<Description>Cleanliness</Description>
					<Progress className="progress" {...progressStyle} percent={47} />
				</Wrapper>
				<Wrapper>
					<Description style={{ marginLeft: "116px" }}>Accuracy</Description>
					<Progress className="progress" {...progressStyle} percent={47} />
				</Wrapper>
			</Wrapper>
			<Wrapper style={{ marginBottom: "23px" }}>
				<Wrapper>
					<Description>Communication</Description>
					<Progress className="progress" {...progressStyle} percent={49} />
				</Wrapper>
				<Wrapper>
					<Description style={{ marginLeft: "116px" }}>Location</Description>
					<Progress className="progress" {...progressStyle} percent={49} />
				</Wrapper>
			</Wrapper>
			<Wrapper style={{ marginBottom: "25px" }}>
				<Wrapper>
					<Description>Checkin</Description>
					<Progress className="progress" {...progressStyle} percent={49} />
				</Wrapper>
				<Wrapper>
					<Description style={{ marginLeft: "116px" }}>Value</Description>
					<Progress className="progress" {...progressStyle} percent={49} />
				</Wrapper>
			</Wrapper>
			<Wrapper>
				<ReviewsCard />
				<ReviewsCard />
			</Wrapper>
		</Container>
	);
};

export default Reviews;
