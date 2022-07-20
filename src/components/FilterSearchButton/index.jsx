import React, { useState } from "react";
import {
	Container,
	FilterButtonImg,
	FilterSearchContainer,
	InputImg,
} from "./style";
import inputHome from "../../assets/icons/inputHome.svg";
import price from "../../assets/icons/price.svg";
import status from "../../assets/icons/status.svg";
import filter from "../../assets/icons/filter.svg";
import search from "../../assets/icons/search.svg";
import { Popover } from "antd";

import AdvancedModal from "../AdvancedModal";
import Button from "../Generic/Button";
import InputGeneric from "../Generic/Input";

const FilterSearchButton = () => {
	const content = <AdvancedModal />;

	return (
		<Container>
			<FilterSearchContainer>
				<InputGeneric
					pl={"44px"}
					placeholder="Enter an address, neighborhood, city, or ZIP code"
				>
					<InputImg src={inputHome} alt="Input Home" />
				</InputGeneric>
				<Popover trigger="click" placement="bottomRight" content={content}>
					<div>
						<Button width={"131px"} height={"44px"} type={"secondary"}>
							<FilterButtonImg src={filter} alt="Filter Icon" />
							Advanced
						</Button>
					</div>
				</Popover>
				<Button width={"180px"} type="primary">
					<FilterButtonImg src={search} alt="Search Icon" />
					Search
				</Button>
			</FilterSearchContainer>
		</Container>
	);
};

export default FilterSearchButton;
