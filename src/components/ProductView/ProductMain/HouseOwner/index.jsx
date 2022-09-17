import React from "react";
import user from "../../../../assets/imgs/nouser.png";
import Button from "../../../Generic/Button";
import {
	CheckboxContainer,
	Input,
	Message,
	MessageLabel,
	OwnerCard,
	PersonImg,
	PersonInfo,
	PhoneNumber,
	Title,
} from "./style";

const HouseOwner = ({ house }) => {
	return (
		<OwnerCard>
			<PersonInfo>
				<PersonImg src={user} />
				<div>
					<Title>{`${house?.user?.firstname} ${house?.user?.lastname}`}</Title>
					<PhoneNumber>(123)456-7890</PhoneNumber>
				</div>
			</PersonInfo>
			<Input placeholder="Name" />
			<Input placeholder="Phone" />
			<Input mb placeholder="Email" />
			<MessageLabel>Message</MessageLabel>
			<Message
				defaultValue={"Hello, I am interested in [New Apartment]"}
			></Message>
			<CheckboxContainer>
				<CheckboxContainer.Input id="person" type={"checkbox"} />
				<CheckboxContainer.Label htmlFor="person">
					By submitting this form I agree to Terms of Use
				</CheckboxContainer.Label>
			</CheckboxContainer>
			<Button mt={"24"} type={"primary"}>
				Send request
			</Button>
		</OwnerCard>
	);
};

export default HouseOwner;
