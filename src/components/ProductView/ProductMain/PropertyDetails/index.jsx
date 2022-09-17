import React from "react";
import { Container, SubDesc, SubTitle, Title, Wrapper } from "./style";

const PropertyDetails = ({ house }) => {
	return (
		<Container>
			<Title>Property Details</Title>
			<Wrapper>
				<Wrapper.Col>
					<Wrapper.Box>
						<SubTitle>Property ID:</SubTitle>
						<SubDesc>{house?.id}</SubDesc>
					</Wrapper.Box>
					<Wrapper.Box>
						<SubTitle>Price:</SubTitle>
						<SubDesc>{house?.price}</SubDesc>
					</Wrapper.Box>
					<Wrapper.Box>
						<SubTitle>Property Size:</SubTitle>
						<SubDesc>{house?.area || "10"} Sq Ft</SubDesc>
					</Wrapper.Box>
					<Wrapper.Box>
						<SubTitle>Year Bulit:</SubTitle>
						<SubDesc>
							{house?.houseDetails?.yearBuilt || "No information provided"}
						</SubDesc>
					</Wrapper.Box>
				</Wrapper.Col>
				<Wrapper.Col>
					<Wrapper.Box>
						<SubTitle>Bedrooms:</SubTitle>
						<SubDesc>{house?.houseDetails?.beds}</SubDesc>
					</Wrapper.Box>
					<Wrapper.Box>
						<SubTitle>Bathrooms:</SubTitle>
						<SubDesc>{house?.houseDetails?.bath}</SubDesc>
					</Wrapper.Box>
					<Wrapper.Box>
						<SubTitle>Garage:</SubTitle>
						<SubDesc>{house?.houseDetails?.garage}</SubDesc>
					</Wrapper.Box>
					<Wrapper.Box>
						<SubTitle>Garage size:</SubTitle>
						<SubDesc>{house?.houseDetails?.area}</SubDesc>
					</Wrapper.Box>
				</Wrapper.Col>
				<Wrapper.Col>
					<Wrapper.Box>
						<SubTitle>Property Type:</SubTitle>
						<SubDesc>Apartment</SubDesc>
					</Wrapper.Box>
					<Wrapper.Box>
						<SubTitle>Property Status:</SubTitle>
						<SubDesc>For Sale</SubDesc>
					</Wrapper.Box>
				</Wrapper.Col>
			</Wrapper>
		</Container>
	);
};

export default PropertyDetails;
