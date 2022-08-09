import React, { useState } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import FilterSearchButton from "../FilterSearchButton";
import { ButtonGeneric } from "../Generic/Button";
import Card from "../Generic/Card";
import {
	CardContainer,
	CardResultSortBy,
	CardResultSortByButton,
	PropertiesContainer,
	WrapperFlex,
} from "./style";

const Properties = ({ info }) => {
	const { search } = useLocation();
	const [dataItems, setDataItems] = useState([]);

	useQuery(
		["propertiesList", search],
		() => {
			return fetch(
				`https://houzing-app.herokuapp.com/api/v1/houses/list${search || ""}`
			).then((res) => res.json());
		},
		{
			onSuccess: (res) => {
				console.log(res?.data);
				setDataItems(res?.data);
			},
			onError: (err) => {
				console.log(err);
			},
			refetchOnWindowFocus: false,
			keepPreviousData: true,
		}
	);

	return (
		<>
			<FilterSearchButton />
			<PropertiesContainer>
				<PropertiesContainer.Title className="title">
					Properties
				</PropertiesContainer.Title>
				<PropertiesContainer.Description className="description">
					Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
				</PropertiesContainer.Description>
				<CardResultSortBy>
					<CardResultSortBy.Result>
						<CardResultSortBy.SpanBold>
							{dataItems?.length || 0}
						</CardResultSortBy.SpanBold>
						results
					</CardResultSortBy.Result>
					<CardResultSortByButton>
						<CardResultSortByButton.Select>
							<CardResultSortByButton.Option value="Sort by: Newest Listings">
								Sort by: Newest Listings
							</CardResultSortByButton.Option>
							<CardResultSortByButton.Option value="Sort by: The oldest lists">
								Sort by: The oldest lists
							</CardResultSortByButton.Option>
						</CardResultSortByButton.Select>
					</CardResultSortByButton>
				</CardResultSortBy>
				<WrapperFlex>
					<CardContainer>
						{dataItems?.map((value) => {
							return <Card key={value.id} info={value} />;
						})}
					</CardContainer>
					<ButtonGeneric mt={48} mb={96} width={"250px"} type={"primary"}>
						Show More
					</ButtonGeneric>
				</WrapperFlex>
			</PropertiesContainer>
		</>
	);
};

export default Properties;
