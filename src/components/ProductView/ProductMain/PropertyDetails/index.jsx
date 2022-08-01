import React from 'react'
import { Container, SubDesc, SubTitle, Title, Wrapper } from './style'

const PropertyDetails = ({house}) => {
  return (
		<Container>
			<Title>Property Details</Title>
			<Wrapper>
				<Wrapper.Col>
					<Wrapper.Box>
						<SubTitle>Property ID:</SubTitle>
						<SubDesc>HZ27</SubDesc>
					</Wrapper.Box>
					<Wrapper.Box>
						<SubTitle>Price:</SubTitle>
						<SubDesc>$130.000</SubDesc>
					</Wrapper.Box>
					<Wrapper.Box>
						<SubTitle>Property Size:</SubTitle>
						<SubDesc>1560 Sq Ft</SubDesc>
					</Wrapper.Box>
					<Wrapper.Box>
						<SubTitle>Year Bulit:</SubTitle>
						<SubDesc>2021-01-09</SubDesc>
					</Wrapper.Box>
				</Wrapper.Col>
				<Wrapper.Col>
					<Wrapper.Box>
						<SubTitle>Bedrooms:</SubTitle>
						<SubDesc>8</SubDesc>
					</Wrapper.Box>
					<Wrapper.Box>
						<SubTitle>Bathrooms:</SubTitle>
						<SubDesc>6</SubDesc>
					</Wrapper.Box>
					<Wrapper.Box>
						<SubTitle>Garage:</SubTitle>
						<SubDesc>4</SubDesc>
					</Wrapper.Box>
					<Wrapper.Box>
						<SubTitle>Garage size:</SubTitle>
						<SubDesc>200 SqFt</SubDesc>
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
}

export default PropertyDetails