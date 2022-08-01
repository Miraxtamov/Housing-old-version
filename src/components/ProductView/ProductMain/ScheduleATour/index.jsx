import React from "react";
import Button from "../../../Generic/Button";
import { Container, Input, Message, SubTitle, Title, Wrapper } from "./style";

const ScheduleATour = () => {
	return (
		<Container>
			<Title>Schedule A Tour</Title>
			<Wrapper>
				<Input.Wrapper>
					<Input.Title>Date</Input.Title>
					<Input type={"date"} placeholder="Date" />
				</Input.Wrapper>
				<Input.Wrapper>
					<Input.Title>Time</Input.Title>
					<Input type={"time"} placeholder="Time" />
				</Input.Wrapper>
			</Wrapper>
			<SubTitle>Your Information</SubTitle>
			<Wrapper>
				<Input type={"text"} placeholder="Name" />
				<Input type={"tel"} placeholder="Phone" />
				<Input type={"email"} placeholder="Email" />
			</Wrapper>
			<Wrapper style={{ marginTop: "24px" }}>
				<Message placeholder="Enter Your Message" />
			</Wrapper>
			<Button mt={"24"} width={"250px"} type={"primary"}>Submit a tour request</Button>
		</Container>
	);
};

export default ScheduleATour;
