import React, { useState } from "react";
import { useQuery } from "react-query";
import MyPropertiesCard from "../Generic/MyPropertiesCard";
import { Container, MyPropertiesContainer, Wrapper } from "./style";

const MyProperties = () => {
	const [dataItems, setDataItems] = useState();
	console.log(dataItems);

	useQuery(
		["myProperties"],
		() =>
			fetch("https://houzing-app.herokuapp.com/api/v1/houses/me", {
				method: "GET",
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			}).then((res) => res.json()),
		{
			onSuccess: (res) => setDataItems(res?.data),
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
					{dataItems?.map((value) => {
						return (
							<tbody key={value?.id}>
								<MyPropertiesCard info={value} />
							</tbody>
						);
					})}
				</MyPropertiesContainer>
			</Container>
		</Wrapper>
	);
};

export default MyProperties;
