import React from "react";
import user from "../../../assets/imgs/nouser.png";
import { Card, Wrapper } from "./style";

const ReviewsCard = () => {
	return (
		<Card>
			<Card.Img src={user} />
			<Card.Name>Jane Cooper</Card.Name>
			<Card.Wrapper style={{ marginBottom: "20px" }}>
				<Card.SubDesc>April 6, 2021 at 3:21 AM</Card.SubDesc>
				<Wrapper style={{ marginLeft: "75px" }}>
					<Card.Star />
					<Card.Star />
					<Card.Star />
					<Card.Star />
					<Card.Star />
					<Card.SubDesc style={{ marginLeft: "8px" }}>(5 reviews)</Card.SubDesc>
				</Wrapper>
			</Card.Wrapper>
			<Card.Description>
				Every single thing we tried with John was delicious! Found some awesome
				places we would definitely go back to on our trip. John was also super
				friendly and passionate about Beşiktaş and Istanbul.{" "}
			</Card.Description>
		</Card>
	);
};

export default ReviewsCard;
