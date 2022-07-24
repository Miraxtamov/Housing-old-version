import React from "react";
import cardHouse from "../../../assets/imgs/house1.png";
import cardProfile from "../../../assets/imgs/cardProfile.png";
import bed from "../../../assets/icons/bed.svg";
import bath from "../../../assets/icons/bath.svg";
import garage from "../../../assets/icons/garage.svg";
import ruler from "../../../assets/icons/ruler.svg";
import resize from "../../../assets/icons/resize.svg";
import heart from "../../../assets/icons/heart.svg";
import prev from "../../../assets/icons/prev.svg";
import next from "../../../assets/icons/next.svg";
import {
	ArrowImgCards,
	CardIcons,
	CardItem,
	CardItemPriceLike,
	Wrapper,
} from "./style";

const Card = ({ info }) => {
	return (
		<Wrapper>
			<CardItem>
				<CardItem.Img src={info?.attachments[0]?.imgPath || "No img"} />
				<CardItem.SaleProfileImg>
					<CardItem.Sales>
						<CardItem.Featured>FEATURED</CardItem.Featured>
						<CardItem.Sale>FOR SALE</CardItem.Sale>
					</CardItem.Sales>
					<CardItem.ProfileImg src={cardProfile} />
				</CardItem.SaleProfileImg>
				<CardItem.Title>{info?.name || "Description"}</CardItem.Title>
				<CardItem.Description>
					{info?.name || "Name"},{info?.address || "Address"},
					{info?.city || "City"},{info?.country || "Country"},
				</CardItem.Description>
				<CardIcons>
					<CardIcons.CardIcon>
						<CardIcons.Img src={bed} />
						<CardIcons.CardIconText>
							{info?.houseDetails?.area || 0} Beds
						</CardIcons.CardIconText>
					</CardIcons.CardIcon>
					<CardIcons.CardIcon>
						<CardIcons.Img src={bath} />
						<CardIcons.CardIconText>
							{info?.houseDetails?.bath || 0} Bath
						</CardIcons.CardIconText>
					</CardIcons.CardIcon>
					<CardIcons.CardIcon>
						<CardIcons.Img src={garage} />
						<CardIcons.CardIconText>
							{info?.houseDetails?.garage || 0} Garage
						</CardIcons.CardIconText>
					</CardIcons.CardIcon>
					<CardIcons.CardIcon>
						<CardIcons.Img src={ruler} />
						<CardIcons.CardIconText>
							{info?.houseDetails?.room || 0} Room
						</CardIcons.CardIconText>
					</CardIcons.CardIcon>
				</CardIcons>
				<CardItem.Hr />
				<CardItemPriceLike>
					<CardItem.Prices>
						<CardItem.Discount>{info?.price || 0} / month</CardItem.Discount>
						<CardItem.Price>{info?.salePrice || 0} / month</CardItem.Price>
					</CardItem.Prices>
					<CardItem.ResizeLike>
						<CardItem.ResizeImg src={resize} />
						<CardItem.HeartImg src={heart} />
					</CardItem.ResizeLike>
				</CardItemPriceLike>
			</CardItem>
		</Wrapper>
	);
};

export default Card;
