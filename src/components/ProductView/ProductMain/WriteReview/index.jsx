import React from "react";
import Button from "../../../Generic/Button";
import { Input, Message, SubTitle } from "../ScheduleATour/style";
import { Container, Star, SubDesc, Title, Wrapper } from "./style";

const WriteReview = () => {
	return (
		<Container>
			<Title>Write a Review</Title>
			<Wrapper style={{ marginBottom: "24px" }}>
				<Wrapper>
					<SubDesc style={{ marginRight: "115px" }}>Cleanliness</SubDesc>
					<Star />
					<Star />
					<Star />
					<Star />
					<Star />
				</Wrapper>
				<Wrapper>
					<SubDesc style={{ marginRight: "129px" }}>Accuracy</SubDesc>
					<Star />
					<Star />
					<Star />
					<Star />
					<Star />
				</Wrapper>
			</Wrapper>
			<Wrapper style={{ marginBottom: "24px" }}>
				<Wrapper>
					<SubDesc style={{ marginRight: "79px" }}>Communication</SubDesc>
					<Star />
					<Star />
					<Star />
					<Star />
					<Star />
				</Wrapper>
				<Wrapper>
					<SubDesc style={{ marginRight: "133px" }}>Location</SubDesc>
					<Star />
					<Star />
					<Star />
					<Star />
					<Star />
				</Wrapper>
			</Wrapper>
			<Wrapper>
				<Wrapper>
					<SubDesc style={{ marginRight: "131px" }}>Check-in</SubDesc>
					<Star />
					<Star />
					<Star />
					<Star />
					<Star />
				</Wrapper>
				<Wrapper>
					<SubDesc style={{ marginRight: "155px" }}>Value</SubDesc>
					<Star />
					<Star />
					<Star />
					<Star />
					<Star />
				</Wrapper>
			</Wrapper>
			<Wrapper style={{ gap: "20px", marginTop: "71px" }}>
				<Input type={"text"} placeholder="Name" />
				<Input type={"email"} placeholder="Email" />
			</Wrapper>
			<Wrapper style={{ marginTop: "24px" }}>
				<Message placeholder="Enter Your Message" />
			</Wrapper>
			<Button mt={"24"} mb={"96"} width={"250px"} type={"primary"}>
				Send your review
			</Button>
		</Container>
	);
};

export default WriteReview;
