import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import noPicture from "../../../assets/imgs/nopicture.jpg";
import cardProfile from "../../../assets/imgs/cardProfile.png";
import bed from "../../../assets/icons/bed.svg";
import bath from "../../../assets/icons/bath.svg";
import garage from "../../../assets/icons/garage.svg";
import ruler from "../../../assets/icons/ruler.svg";
import resize from "../../../assets/icons/resize.svg";
import heart from "../../../assets/icons/heart.svg";
import { CardIcons, CardItem, CardItemPriceLike, Wrapper } from "./style";

const Card = ({ info }) => {
	const navigate = useNavigate();
	const [love, setLove] = useState(false);
	const [id, setId] = useState();

	useQuery(["addFavourite"], () => {
		fetch(
			`https://houzing-app.herokuapp.com/api/v1/houses/addFavourite/${
				id ? id : ""
			}?favourite=true`,
			{
				method: "PUT",
				headers: {
					"Content-type": "application/json",
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
				body: JSON.stringify({
					id: "",
				}),
			}
				.then((res) => res.json())
				.then((res) => res),
			{
				onSuccess: (res) => alert("sa"),
				onError: (err) => console.log(err),
			}
		);
	});

	const addFavourite = () => {};

	const onClick = (id) => {
		navigate(`/properties/${info?.id}`);
	};

	const text =
		(info?.name || "name") +
		" " +
		(info?.address || "address") +
		" " +
		(info?.city || "City") +
		" " +
		(info?.country || "Country");

	return (
		<Wrapper>
			<CardItem>
				<CardItem.Img
					style={{ cursor: "pointer" }}
					onClick={onClick}
					src={info?.attachments[0]?.imgPath || noPicture}
				/>
				<CardItem.SaleProfileImg>
					<CardItem.Sales>
						<CardItem.Featured>FEATURED</CardItem.Featured>
						<CardItem.Sale>FOR SALE</CardItem.Sale>
					</CardItem.Sales>
					<CardItem.ProfileImg src={cardProfile} />
				</CardItem.SaleProfileImg>
				<div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
					<CardItem.Title onClick={onClick}>
						{info?.address || "Title"}
					</CardItem.Title>
					<CardItem.Description>
						{text.length > 40 ? text.slice(0, 40) + "..." : text}
					</CardItem.Description>
					<CardIcons>
						<CardIcons.CardIcon>
							<CardIcons.Img src={bed} />
							<CardIcons.CardIconText>
								{info?.houseDetails?.beds || 0} Beds
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
								{info?.houseDetails?.area || 0} Sq Ft
							</CardIcons.CardIconText>
						</CardIcons.CardIcon>
					</CardIcons>
				</div>
				<CardItem.Hr />
				<CardItemPriceLike>
					<CardItem.Prices>
						<CardItem.Discount>{info?.price || 0} / month</CardItem.Discount>
						<CardItem.Price>{info?.salePrice || 0} / month</CardItem.Price>
					</CardItem.Prices>
					<CardItem.ResizeLike>
						<CardItem.ResizeImg onClick={onClick} src={resize} />
						<CardItem.HeartImg
							clr={() => love && "#CC5040"}
							onClick={() => setLove(!love)}
						/>
					</CardItem.ResizeLike>
				</CardItemPriceLike>
			</CardItem>
		</Wrapper>
	);
};

export default Card;
