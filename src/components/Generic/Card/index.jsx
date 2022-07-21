import React from "react";
import cardHouse from "../../../assets/imgs/house1.png";
import cardProfile from "../../../assets/imgs/cardProfile.png";
import bed from "../../../assets/icons/bed.svg";
import bath from "../../../assets/icons/bath.svg";
import garage from "../../../assets/icons/garage.svg";
import ruler from "../../../assets/icons/ruler.svg";
import resize from "../../../assets/icons/resize.svg";
import heart from "../../../assets/icons/heart.svg";
import { CardIcons, CardItem, CardItemPriceLike } from "./style";

const Card = () => {
	return (
		<CardItem>
			<CardItem.Img src={cardHouse} />
			<CardItem.SaleProfileImg>
				<CardItem.Sales>
					<CardItem.Featured>FEATURED</CardItem.Featured>
					<CardItem.Sale>FOR SALE</CardItem.Sale>
				</CardItem.Sales>
				<CardItem.ProfileImg src={cardProfile} />
			</CardItem.SaleProfileImg>
			<CardItem.Title>New Apartment Nice Wiew</CardItem.Title>
			<CardItem.Description>Quincy St, Brooklyn, NY, USA</CardItem.Description>
			<CardIcons>
				<CardIcons.CardIcon>
					<CardIcons.Img src={bed} />
					<CardIcons.CardIconText>4 Beds</CardIcons.CardIconText>
				</CardIcons.CardIcon>
				<CardIcons.CardIcon>
					<CardIcons.Img src={bath} />
					<CardIcons.CardIconText>5 Baths</CardIcons.CardIconText>
				</CardIcons.CardIcon>
				<CardIcons.CardIcon>
					<CardIcons.Img src={garage} />
					<CardIcons.CardIconText>1 Garage</CardIcons.CardIconText>
				</CardIcons.CardIcon>
				<CardIcons.CardIcon>
					<CardIcons.Img src={ruler} />
					<CardIcons.CardIconText>1200 Sq Ft</CardIcons.CardIconText>
				</CardIcons.CardIcon>
			</CardIcons>
			<CardItem.Hr />
			<CardItemPriceLike>
				<CardItem.Prices>
					<CardItem.Discount>$2,800/mo</CardItem.Discount>
					<CardItem.Price>$7,500/mo</CardItem.Price>
				</CardItem.Prices>
				<CardItem.ResizeLike>
					<CardItem.ResizeImg src={resize} />
					<CardItem.HeartImg src={heart} />
				</CardItem.ResizeLike>
			</CardItemPriceLike>
		</CardItem>
	);
};

export default Card;
