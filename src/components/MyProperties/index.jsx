import React, { useState } from "react";
import { useQuery } from "react-query";
import edit from "../../assets/icons/edit.svg";
import trash from "../../assets/icons/trash.svg";
import myHouse from "../../assets/imgs/house1.png";
import { Container, MyPropertiesContainer, Wrapper } from "./style";

const MyProperties = () => {
	const [dataItems, setDataItems] = useState();
	console.log(dataItems);

	useQuery(
		"houseMe",
		() => {
			fetch("https://houzing-app.herokuapp.com/api/v1/houses/me", {
				method: "GET",
				headers: {
					"Content-type": "application/json",
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			}).then((res) => res.json());
		},
		{
			onSuccess: (res) => {
				console.log(res?.data);
				setDataItems(res?.data || "No data ");
			},
			onError: (err) => console.log(err),
			refetchOnWindowFocus: false,
			keepPreviousData: true,
		}
	);

	return (
		<Wrapper>
			<Container>
				<Container.TitleSearch>
					<Container.Title>My properties</Container.Title>
					<Container.Search placeholder="Search" />
				</Container.TitleSearch>
				<MyPropertiesContainer>
					<thead>
						<MyPropertiesContainer.TR>
							<MyPropertiesContainer.TH style={{ paddingLeft: "30px" }}>
								Listing Title
							</MyPropertiesContainer.TH>
							<MyPropertiesContainer.TH style={{ paddingLeft: "20px" }}>
								Date Published
							</MyPropertiesContainer.TH>
							<MyPropertiesContainer.TH ml>Status</MyPropertiesContainer.TH>
							<MyPropertiesContainer.TH ml>View</MyPropertiesContainer.TH>
							<MyPropertiesContainer.TH style={{ paddingRight: "30px" }} ml>
								Action
							</MyPropertiesContainer.TH>
						</MyPropertiesContainer.TR>
					</thead>
					<tbody>
						<MyPropertiesContainer.TR>
							<MyPropertiesContainer.TD
								style={{ display: "flex", marginBottom: "16px" }}
							>
								<MyPropertiesContainer.Left>
									<div style={{ position: "relative" }}>
										<MyPropertiesContainer.IMG src={myHouse} />
									</div>
									<MyPropertiesContainer.Featured>
										Featured
									</MyPropertiesContainer.Featured>
								</MyPropertiesContainer.Left>
								<MyPropertiesContainer.Center>
									<MyPropertiesContainer.CenterTitle>
										New Apartment Nice Wiew
									</MyPropertiesContainer.CenterTitle>
									<MyPropertiesContainer.CenterDescription>
										Quincy St, Brooklyn, NY, USA
									</MyPropertiesContainer.CenterDescription>
									<MyPropertiesContainer.CenterSales>
										$2,800/mo
									</MyPropertiesContainer.CenterSales>
									<MyPropertiesContainer.CenterPrice>
										$7,500/mo
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
									Pending
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
								<MyPropertiesContainer.Trash src={trash} />
							</MyPropertiesContainer.TD>
						</MyPropertiesContainer.TR>
					</tbody>
				</MyPropertiesContainer>
			</Container>
		</Wrapper>
	);
};

export default MyProperties;
