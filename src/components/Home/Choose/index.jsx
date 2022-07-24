import React from "react";
import discord from "../../../assets/icons/discord.svg";
import chooseHouse from "../../../assets/icons/chooseHouse.svg";
import calculator from "../../../assets/icons/calculator.svg";
import maps from "../../../assets/icons/maps.svg";
import { ChooseCard, ChooseCards, ChooseContainer, Container } from "./style";

const Choose = () => {
	return (
		<Container>
			<ChooseContainer>
				<ChooseContainer.Title className="title">
					Why Choose Us?
				</ChooseContainer.Title>
				<ChooseContainer.Desc className="description">
					Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
				</ChooseContainer.Desc>
				<ChooseCards>
					<ChooseCard>
						<ChooseCard.Img src={discord} />
						<ChooseCard.Title>Trusted By Thousands</ChooseCard.Title>
						<ChooseCard.Desc>
							With over 1 million+ homes for sale available on the website,
							Trulia can match you with a house you will want to call home.
						</ChooseCard.Desc>
					</ChooseCard>
					<ChooseCard>
						<ChooseCard.Img src={chooseHouse} />
						<ChooseCard.Title>Wide Renge Of Properties</ChooseCard.Title>
						<ChooseCard.Desc>
							With over 1 million+ homes for sale available on the website,
							Trulia can match you with a house you will want to call home.
						</ChooseCard.Desc>
					</ChooseCard>
					<ChooseCard>
						<ChooseCard.Img src={calculator} />
						<ChooseCard.Title>Financing Made Easy</ChooseCard.Title>
						<ChooseCard.Desc>
							With over 1 million+ homes for sale available on the website,
							Trulia can match you with a house you will want to call home.
						</ChooseCard.Desc>
					</ChooseCard>
					<ChooseCard>
						<ChooseCard.Img src={maps} />
						<ChooseCard.Title>See Neighborhoods</ChooseCard.Title>
						<ChooseCard.Desc>
							With over 1 million+ homes for sale available on the website,
							Trulia can match you with a house you will want to call home.
						</ChooseCard.Desc>
					</ChooseCard>
				</ChooseCards>
			</ChooseContainer>
		</Container>
	);
};

export default Choose;
