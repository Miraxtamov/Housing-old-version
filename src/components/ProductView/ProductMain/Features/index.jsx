import React from "react";
import { icons } from "./icons";
import { Container, Icons, SubTitle, Title, Wrapper } from "./style";

const Features = () => {
	return (
		<Container>
			<Title>Feautures</Title>
			<Wrapper>
				{icons.map((value) => {
					return (
						<Wrapper.Box key={value.id}>
							<Icons.Wrapper>{value.icon}</Icons.Wrapper>
							<SubTitle>{value.subtitle}</SubTitle>
						</Wrapper.Box>
					);
				})}
			</Wrapper>
		</Container>
	);
};

export default Features;
