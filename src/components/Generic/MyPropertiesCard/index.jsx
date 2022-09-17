import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import edit from "../../../assets/icons/edit.svg";
import trash from "../../../assets/icons/trash.svg";
import noPicture from "../../../assets/imgs/nopicture.jpg";

import { MyPropertiesContainer } from "./style";

const MyPropertiesCard = ({ info }) => {
	const navigate = useNavigate();

	const onClick = (id) => {
		navigate(`/properties/${info?.id}`);
	};

	const myPropertiesDelete = (id) => {
		{
			fetch(`https://houzing-app.herokuapp.com/api/v1/houses/${id}`, {
				method: "DELETE",
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
					"Content-type": "application/json",
				},
			}).then((res) => {
				res.json().then((err) => {
					console.warn(err);
				});
			});
		}
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
		<>
			<MyPropertiesContainer.TR>
				<MyPropertiesContainer.TD
					style={{ display: "flex", marginBottom: "16px" }}
				>
					<MyPropertiesContainer.Left>
						<div style={{ position: "relative" }}>
							<MyPropertiesContainer.IMG
								src={info?.attachments[0]?.imgPath || noPicture}
							/>
						</div>
						<MyPropertiesContainer.Featured>
							Featured
						</MyPropertiesContainer.Featured>
					</MyPropertiesContainer.Left>
					<MyPropertiesContainer.Center>
						<MyPropertiesContainer.CenterTitle onClick={onClick}>
							{info?.name || "New Apartment Nice Wiew"}
						</MyPropertiesContainer.CenterTitle>
						<MyPropertiesContainer.CenterDescription>
							{text.length > 20 ? text.slice(0, 20) + "..." : text}
						</MyPropertiesContainer.CenterDescription>
						<MyPropertiesContainer.CenterSales>
							{info?.salePrice || 0} / month
						</MyPropertiesContainer.CenterSales>
						<MyPropertiesContainer.CenterPrice>
							{info?.price || 0} / month
						</MyPropertiesContainer.CenterPrice>
					</MyPropertiesContainer.Center>
					<MyPropertiesContainer.Right>
						<MyPropertiesContainer.RightForSale>
							For Sale
						</MyPropertiesContainer.RightForSale>
					</MyPropertiesContainer.Right>
				</MyPropertiesContainer.TD>
				<MyPropertiesContainer.TD>
					<MyPropertiesContainer.Info style={{ marginLeft: "20px" }}>
						30 December 2022
					</MyPropertiesContainer.Info>
				</MyPropertiesContainer.TD>
				<MyPropertiesContainer.TD>
					<MyPropertiesContainer.Info style={{ marginLeft: "92px" }}>
						{info?.status || "Pending"}
					</MyPropertiesContainer.Info>
				</MyPropertiesContainer.TD>
				<MyPropertiesContainer.TD>
					<MyPropertiesContainer.Info style={{ marginLeft: "92px" }}>
						6013
					</MyPropertiesContainer.Info>
				</MyPropertiesContainer.TD>
				<MyPropertiesContainer.TD>
					<MyPropertiesContainer.Edit
						style={{ marginLeft: "92px" }}
						src={edit}
					/>
					<MyPropertiesContainer.Trash
						onClick={() => myPropertiesDelete(info?.id)}
						src={trash}
					/>
				</MyPropertiesContainer.TD>
			</MyPropertiesContainer.TR>
		</>
	);
};

export default MyPropertiesCard;
