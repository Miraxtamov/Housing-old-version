import React from "react";
import user from "../../../assets/imgs/nouser.png";
import { CardContainer, Wrapper } from "./style";

const TestimonialsCard = () => {
	return (
		<Wrapper>
			<CardContainer>
				<CardContainer.AboutOpinion>
					“ I believe in lifelong learning and Skola is a great place to learn
					from experts. I've learned a lot and recommend it to all my friends “
				</CardContainer.AboutOpinion>
				<CardContainer.Img src={user} />
				<CardContainer.Name>Marvin McKinney</CardContainer.Name>
				<CardContainer.Jobs>Designer</CardContainer.Jobs>
			</CardContainer>
		</Wrapper>
	);
};

export default TestimonialsCard;
